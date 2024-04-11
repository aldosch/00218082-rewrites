export default function NewChild({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1 className="font-bold text-3xl mb-2">
        {"New > " + params.slug + " page"}
      </h1>
      <h2 className="text-xl">✨ powered by new app</h2>
    </main>
  );
}
