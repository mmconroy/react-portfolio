import React from "react";
import Hive from "./img/hive-logo.png";

function Hive() {
  return (
    <div>
      <header>
        <h1>The Hive</h1>
        <p>Where budgeting doesn't have to BEE a secret</p>
        <img src={Hive} alt="The Hive Logo" className="hive-logo" />
      </header>
      <main>
        <div className="hive__challenge">
          <h1>The Challenge:</h1>
          <p>
            Young adults want a simple way to calculate a recommended budget
          </p>
        </div>
        <div className="project__details">
          <h2>Project Details:</h2>
          <p>
            We created The Hive in just four weeks using a lean and Agile
            collaborative environment. In addition to working as SCRUM Master
            for the project, I was tasked with creating several working
            prototypes of the app from high fidelity mockups.
          </p>
          <p>Roles: SCRUM Master, developer, prototyper</p>
          <p>
            Tools Used: HTML, CSS, JavaScript, React, SASS, and Styled
            Components
          </p>
        </div>
        <div className="hive__user__journey">
          <h2>The Hive New User Journey</h2>
        </div>
        <div className="next__steps">
          <h2>Outcomes and Next Steps</h2>
          <h3>Outcomes</h3>
          <p>
            Successfully helped to bridge the gap between hi-fi mockups and
            implementation of app to work as expected
          </p>
          <p>
            Worked with the team to help limit scope-creep during the design
            phase.
          </p>
          <p>
            Used Agile methodology to keep team on track in a lean iterative
            environment.
          </p>
          <h3>Next Steps</h3>
          <p>
            Refactor code to use React Hooks to better avoid complications in
            state.
          </p>
          <p>
            Login Pages: This would include form validation of email and
            password.
          </p>
          <p>
            Add additional animations for a splash screen and to indicative
            loading and error states.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Hive;
