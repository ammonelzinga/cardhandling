type Props = {
  quote: string;
  author?: string;
  source?: string;
};

export default function QuoteCard({ quote, author, source }: Props) {
  return (
    <article style={{ padding: 16, border: '1px solid #334155', borderRadius: 12, background: '#0b1222' }}>
      <p style={{ marginTop: 0, lineHeight: 1.5 }}>“{quote}”</p>
      <footer style={{ color: '#94a3b8', fontSize: 13 }}>
        {author && <span>— {author}</span>} {source && <span> · <em>{source}</em></span>}
      </footer>
    </article>
  );
}
