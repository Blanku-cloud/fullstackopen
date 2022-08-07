const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundementals of React";
  const exersice1 = 10;
  const part2 = "Using props to pass data";
  const exersice2 = 7;
  const part3 = "State of a component";
  const exersice3 = 14;

  return (
    <div>
      <Header title={course} />
      <Content
        type1={part1}
        exersice1={exersice1}
        type2={part2}
        exersice2={exersice2}
        type3={part3}
        exersice3={exersice3}
      />
      <Total total={exersice1 + exersice2 + exersice3} />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

const Content = (props) => {
  const type1 = props.type1;
  const exersice1 = props.exersice1;
  const type2 = props.type2;
  const exersice2 = props.exersice2;
  const type3 = props.type3;
  const exersice3 = props.exersice3;

  return (
    <>
      <Part part={type1} exersice={exersice1} />
      <Part part={type2} exersice={exersice2} />
      <Part part={type3} exersice={exersice3} />
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
  return <>Number of exersice {props.total}</>;
};

export default App;
