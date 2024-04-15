import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header courseTitle={course} />

          {course.parts.map((part) => (
            <Content key={part.id} courseName={part} />
          ))}

          <h3>
            Total Exercises:{" "}
            {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
          </h3>
        </div>
      ))}
    </>
  );
};

export default Course;
