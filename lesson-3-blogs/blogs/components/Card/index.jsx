import Link from "next/link";

const Card = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id}>
      <div className="border flex flex-col p-1 m-10">
        <img
          src={blog.cover_image ? blog.cover_image : "/women.avif"}
          className="h-[280px] w-[650px]"
        />
        <div className="flex flex-col p-1">
          <span>{blog?.type_of}</span>
          <h1>{blog.title}</h1>
          <div className="flex items-center p-1 gap-2">
            <img
              src={blog.user.profile_image}
              className="w-[50px] h-[50px] rounded-full"
            />
            <p>{blog.user.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
