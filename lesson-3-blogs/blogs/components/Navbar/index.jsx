import Link from "next/link";
import Contact from "@/pages/contact";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-72 pt-5 pb-5 border-b-2 border-slate-200">
      <img src="/logo.png" className="h-[36px] w-[158px]" />

      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <Link href="/contact">Contact</Link>
      </div>
      <input placeholder="Search" type="text"></input>
      <button type="submit"></button>
    </div>
  );
}
