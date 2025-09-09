"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
      {pathname === "/about" ? (
        <Link href="/" className="button">Home</Link>
      ) : (
        <Link href="/about" className="button">About</Link>
      )}
    </header>
  );
}