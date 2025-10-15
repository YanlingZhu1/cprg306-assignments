// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="bg-amber-100 text-4xl font-bold mb-4 p-4 rounded">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <Link
        href="/week-2"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-2 page</p>
      </Link>
      <Link
        href="/week-3"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-3 page</p>
      </Link>
     
    </main>
  );
}
