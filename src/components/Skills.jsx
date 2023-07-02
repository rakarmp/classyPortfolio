import React from "react";

function Skills() {
  return (
    <div className="skills section second" id="skills">
      <div className="container">
        <h1>
          Technical
          <br />
          Skills
        </h1>
        <ul className="skill-list list-flat">
          <li>Web Technology</li>
          <li>HTML | CSS | PHP | Javascript</li>
        </ul>
        <ul className="skill-list list-flat">
          <li>Mobile Technology</li>
          <li>Dart | Javascript</li>
        </ul>
        <ul className="skill-list list-flat">
          <li>Other Technology</li>
          <li>Python | Bash</li>
        </ul>
        <ul className="skill-list list-flat">
          <li>Database</li>
          <li>MySQL | MongoDB | Prisma</li>
        </ul>
        <ul className="skill-list list-flat">
          <li>Framework</li>
          <li>Laravel | React | Next | Flutter | React Native Expo</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
