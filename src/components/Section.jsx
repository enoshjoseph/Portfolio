export default function Section({ id, title, dark }) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-8 ${
        dark ? "bg-gray-950" : ""
      }`}
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400">Content coming soon...</p>
      </div>
    </section>
  );
}
