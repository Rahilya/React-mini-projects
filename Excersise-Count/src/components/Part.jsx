const Part = ({ courseName }) => {
  return (
    <>
      <p>
        {courseName.name}- {courseName.exercises}
      </p>
    </>
  );
};

export default Part;
