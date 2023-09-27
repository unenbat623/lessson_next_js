import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="/Logo (1).png" className="h-[80px] w-[250px]" />
      <div className="flex gap-3">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <input placeholder="Search" type="text"></input>
      <button type="submit"></button>
    </div>
  );
}
