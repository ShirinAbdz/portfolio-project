import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "ُSept 2019 - Jun 2023",
    degree: "Bachelor’s Degree",
    content: "I studied Sftware Engineering in Guilan University.",
  },
  {
    id: 2,
    year: "Jun 2024 - present",
    degree: "Varexe",
    content: "Varexe is a Canadian company which provides accounting services.",
  },
  // {
  //   id: 3,
  //   year: "2015 - 2012",
  //   degree: "Honours Degree",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  // },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
