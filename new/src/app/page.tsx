import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-3xl mb-2">New app</h1>
      <Link href={"/new"} className="text-xl">
        👉 New
      </Link>
    </main>
  );
}
