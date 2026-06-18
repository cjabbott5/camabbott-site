// src/lib/submitResponse.js
//
// The ONLY place that knows how responses leave the browser.
// Swap the body of submitToBackend() to change providers (Supabase, a Vercel
// function, Google Sheets, etc.) without touching any survey UI code.
//
// -----------------------------------------------------------------------------
// CURRENT ADAPTER: Firebase Firestore
// -----------------------------------------------------------------------------
// To go live (≈5 minutes):
//   1. npm install firebase
//   2. Create a project at https://console.firebase.google.com → add a Web app.
//   3. Enable Firestore (Build → Firestore Database → Create, start in test mode
//      for now; lock down rules before launch — see note at bottom).
//   4. Paste the config object from the Firebase console into firebaseConfig below.
// That's it. Until then, the survey runs in PREVIEW MODE: responses are saved to
// localStorage so you can test the whole flow, and the user still sees a clean
// confirmation. Nothing breaks if `firebase` isn't installed yet.

const firebaseConfig = {
  apiKey: '',            // <-- paste from Firebase console
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const COLLECTION = 'survey_responses';

export function isBackendConfigured() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
}

// Returns { id } on success, or throws. Dynamic imports keep the app building
// even before `firebase` is installed.
export async function submitToBackend(payload) {
  if (!isBackendConfigured()) {
    const err = new Error('Backend not configured');
    err.code = 'NOT_CONFIGURED';
    throw err;
  }

  const { initializeApp, getApps } = await import('firebase/app');
  const { getFirestore, collection, addDoc, serverTimestamp } = await import(
    'firebase/firestore'
  );

  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const ref = await addDoc(collection(db, COLLECTION), {
    ...payload,
    createdAt: serverTimestamp(),
  });

  return { id: ref.id };
}

// Preview-mode fallback: keep responses in localStorage so nothing is lost
// before the backend is wired. Retrieve them anytime in DevTools console with:
//   JSON.parse(localStorage.getItem('lr_local_submissions'))
export function saveLocally(payload) {
  const KEY = 'lr_local_submissions';
  let list = [];
  try {
    list = JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    list = [];
  }
  const id = `local_${Date.now()}`;
  list.push({ id, ...payload });
  localStorage.setItem(KEY, JSON.stringify(list));
  return { id };
}

/*
 * SECURITY NOTE before launch:
 * "test mode" Firestore rules allow anyone to read/write. Since this form is
 * public + anonymous, set rules to allow create-only and block reads, e.g.:
 *
 *   match /survey_responses/{doc} {
 *     allow create: if true;
 *     allow read, update, delete: if false;
 *   }
 *
 * Pair with App Check (reCAPTCHA) to deter spam/bots before going public.
 */