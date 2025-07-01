// components/ui/QuoteBlock.jsx
export default function QuoteBlock({ text, author }) {
    return (
      <div className="border-l-4 border-purple-500 pl-4 py-4 mb-6">
        <p className="italic text-zinc-200 text-lg">“{text}”</p>
        {author && <p className="mt-2 text-sm text-zinc-400">— {author}</p>}
      </div>
    )
  }
  