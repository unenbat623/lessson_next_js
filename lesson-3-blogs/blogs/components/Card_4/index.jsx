const FourCard = ({ blog }) => {
  return (
    <div className="flex items-start self-stretch">
      <div key={blog?.id} className="flex 1 0 0">
        <img
          src={blog?.social_image}
          className="flex 1 0 0 self-stretch w-80 h-52"
        />
        <div className="description">
          <span>{blog?.type_of}</span>
          <h1 className="self-stretch">{blog?.description}</h1>
        </div>
      </div>
    </div>
  );
};
export default FourCard;
