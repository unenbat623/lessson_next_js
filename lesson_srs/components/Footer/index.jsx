export default function Footer() {
  return (
    <div className="container h-24  mx-auto">
      <div className=" items-start pt-16">
        <div className="flex  gap-6 justify-between">
          <div className="flex-col items-start gap-3 ">
            <div className=" text-xl">About</div>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad
            <br /> minim veniam
            <div className=" py-1">Email : info@jstemplate.net</div>
            <div className="pb-1">Phone : 880 123 456 789</div>
          </div>
          <div className="flex flex-col p-5 gap-2">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex flex-col mt-5 gap-6">
            <a href="https://www.facebook.com/profile.php?id=100089448708671">
              <img src="Facebook.svg" className="w-[20px] h-[20px]" />
            </a>
            <a href="https://twitter.com/Unenbat050604">
              <img src="Twitter.svg" className="w-[20px] h-[20px]" />
            </a>
            <a href="https://www.instagram.com/unenbat_623/">
              <img src="Negative.svg" className="w-[20px] h-[20px]" />
            </a>
            <a href="https://www.linkedin.com/in/zele-m-7a4b7823b/">
              <img src="Linkedin.svg" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </div>
        <div className="flex border-t-2 p-3">
          <img src="/metablog.png" className="h-[60px] w-[60px]" />
          <div className="py-2 px-2 p-2">
            <div>MetaBlog</div>
            <div>© All Rights Reserved.</div>
          </div>
          <div className="sm:flex-col">
            <a className="p-5" href="/terms">
              Terms of Use
            </a>
            <a className="p-5" href="/Privacy">
              Privacy Policy
            </a>
            <a className="p-5" href="/Cookie">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
