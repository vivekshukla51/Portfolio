"use client";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
      {pathname === "/about" ? (
        <a href="/" className="button">Home</a>
      ) : (
        <a href="/about" className="button">About</a>
      )}
    </header>
  );
}