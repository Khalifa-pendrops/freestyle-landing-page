import React from "react";
import Person from "./Person";

function NameList() {
  // const nameArray = ["khalifa", "shino", "ogechi"];
  const person = [
    {
      id: 1,
      name: "khalifa",
      age: 32,
      skill: "React",
    },
    {
      id: 2,
      name: "shino",
      age: 24,
      skill: "Angular",
    },

    {
      id: 3,
      name: "boma",
      age: 22,
      skill: "Vue",
    },
  ];

  const personList = person.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <h1> {personList}</h1>;
  // <div>
  //   <h2>{nameArray[0]}</h2>
  //   <h2>{nameArray[1]}</h2>
  //   <h2>{nameArray[2]}</h2>
  //       {nameArray.map(name => <h2>{name}</h2>)}
  // </div>
}

export default NameList;
