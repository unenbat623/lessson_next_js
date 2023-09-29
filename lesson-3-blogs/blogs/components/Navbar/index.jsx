import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-72 pt-3 pb-12">
      <img src="/metablog.png" className="h-[80px] w-[100px]" />

      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <input placeholder="Search" type="text"></input>
      <button type="submit"></button>
    </div>
  );
}
