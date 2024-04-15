const Header = ({ courseTitle }) => {
  console.log(courseTitle);
  return (
    <>
      <h1>{courseTitle.name}</h1>
    </>
  );
};

export default Header;
