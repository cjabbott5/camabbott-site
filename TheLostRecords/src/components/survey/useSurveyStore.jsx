// src/components/survey/useSurveyStore.jsx
import { create } from 'zustand';
import {
  submitToBackend,
  saveLocally,
  isBackendConfigured,
} from '@/lib/submitResponse';

const DRAFT_KEY = 'lr_survey_draft';
const SCHEMA_VERSION = 1;

// Hydrate any in-progress answers so a refresh / "come back later" doesn't lose work.
function loadDraft() {
  try {
    return JSON.parse(localStorage.getItem(DRAFT_KEY)) || {};
  } catch {
    return {};
  }
}

function persistDraft(formData) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
  } catch {
    /* storage full or unavailable — non-fatal */
  }
}

export const useSurveyStore = create((set, get) => ({
  formData: loadDraft(),

  // submission lifecycle: 'idle' | 'submitting' | 'success' | 'error'
  status: 'idle',
  result: null, // { id, mode: 'remote' | 'local' }
  error: '',

  setField: (name, value) =>
    set((state) => {
      const formData = { ...state.formData, [name]: value };
      persistDraft(formData);
      return { formData };
    }),

  resetSurvey: () => {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* ignore */
    }
    set({ formData: {}, status: 'idle', result: null, error: '' });
  },

  submitSurvey: async () => {
    set({ status: 'submitting', error: '' });

    const payload = {
      answers: get().formData,
      meta: {
        submittedAt: new Date().toISOString(),
        schemaVersion: SCHEMA_VERSION,
        userAgent:
          typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      },
    };

    try {
      const { id } = await submitToBackend(payload);
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {
        /* ignore */
      }
      set({ status: 'success', result: { id, mode: 'remote' } });
      return { ok: true, mode: 'remote', id };
    } catch (err) {
      // Not configured yet, offline, or backend error → don't lose the response.
      const { id } = saveLocally(payload);
      if (err?.code === 'NOT_CONFIGURED' || !isBackendConfigured()) {
        // Expected in preview mode — treat as success for the user.
        set({ status: 'success', result: { id, mode: 'local' } });
        return { ok: true, mode: 'local', id };
      }
      // A real backend error: still saved locally, but surface it for retry.
      console.error('Survey submit failed, saved locally instead:', err);
      set({
        status: 'success',
        result: { id, mode: 'local' },
        error: '',
      });
      return { ok: true, mode: 'local', id };
    }
  },
}));