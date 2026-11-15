export default function EmptyState({ title, body }) {
  return (
    <section className="empty-state" aria-live="polite">
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}
