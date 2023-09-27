export default function Footer() {
  return (
    <div className="px-8 m-5 text-xl flex gap-5 justify-center">
      <div>
        About
        <br />
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
        <br /> sed do eiusmod tempor incididunt ut labore
        <br /> et dolore magna aliqua. Ut enim ad
        <br /> minim veniam
        <p>Email : info@jstemplate.net</p>
        <p>Phone : 880 123 456 789</p>
      </div>
      <div className="flex flex-col gap-2 justify-center p-5">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex gap-6">
        <img src="Facebook.svg" className="w-[30px] h-[30px]" />
        <img src="Twitter.svg" className="w-[30px] h-[30px]" />
        <img src="Negative.svg" className="w-[30px] h-[30px]" />
        <img src="Linkedin.svg" className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
}
