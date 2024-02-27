const Title = ({ block }) => {
  return (
    <h1 className="title">
      {block ? "You've reached the limit" : "Elegant Counter"}
    </h1>
  );
};

export default Title;
