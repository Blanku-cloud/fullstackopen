const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header title={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  const name = props.title.name;
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const Content = (props) => {
  const [assig1, assig2, assig3] = props.parts;

  return (
    <>
      <Part part={assig1.name} exersice={assig1.exercises} />
      <Part part={assig2.name} exersice={assig2.exercises} />
      <Part part={assig3.name} exersice={assig3.exercises} />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exersice}
      </p>
    </>
  );
};

const Total = (props) => {
  const [assig1, assig2, assig3] = props.parts;

  const total = assig1.exercises + assig2.exercises + assig3.exercises;

  return <>Number of exersice {total}</>;
};

export default App;
