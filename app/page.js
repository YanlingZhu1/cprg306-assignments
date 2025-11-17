// app/page.js
import Link from "next/link";
import React from "react";

const weekLinks = [
  { href: "/week-2", label: "Go to Week-2 page" },
  { href: "/week-3", label: "Go to Week-3 page" },
  { href: "/week-4", label: "Go to Week-4 page" },
  { href: "/week-5", label: "Go to Week-5 page" },
  { href: "/week-6", label: "Go to Week-6 page" },
  { href: "/week-7", label: "Go to Week-7 page" },
  { href: "/week-8", label: "Go to Week-8 page" },
  { href: "/week-9", label: "Go to Week-9 page" },
];

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
      <h1 className="bg-amber-100 text-4xl font-bold mb-4 p-4 rounded">
        CPRG 306: Web Development 2 - Assignments
      </h1>
    {weekLinks.map((link) => (
        <Link
        key={link.href}
        href={link.href}
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>{link.label}</p>
      </Link>
      ) )}
      
      {/* <Link
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
     <Link
        href="/week-4"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-4 page</p>
      </Link>
      <Link
        href="/week-5"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-5 page</p>
      </Link>
      <Link
        href="/week-6"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-6 page</p>
      </Link>
      <Link
        href="/week-7"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-7 page</p>
      </Link>
      <Link
        href="/week-8"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-8 page</p>
      </Link>
            <Link
        href="/week-9/shopping-list"
        className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
      >
        <p>Go to Week-9 page</p>
      </Link> */}
      
    </main>
  );
}
