const Card = ({ blog }) => {
  return (
    <div className="border flex flex-col p-2">
      <img
        src={blog.cover_image ? blog.cover_image : "/women.avif"}
        className="h-[300px]"
      />
      <div className="flex flex-col">
        <span>{blog?.type_of}</span>
        <h1>{blog.title}</h1>
        <div className="flex items-center gap-2">
          <img
            src={blog.user.profile_image}
            className="w-[100px] h-[100px] rounded-full"
          />
          <p>{blog.user.name}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
