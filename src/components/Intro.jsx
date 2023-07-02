import React from "react";
import Typed from "typed.js";

function Intro() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["home any planet", "in your galaxy", "everywhere"],
      typeSpeed: 120,
      backDelay: 700,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro section" id="about">
      <div className="container">
        <p>Hi, I’m Raka </p>
        <div className="units-row units-split wrap">
          <div className="unit-20">
            <img src="img/picture.jpg" alt="Avatar" />
          </div>
          <div className="unit-80">
            <h1>
              I live in
              <br />
              <span ref={el}></span>
            </h1>
          </div>
          <p>
            web developer, javascript adventure, React framework enthusiast,
            happy with any technology, fast in learning the latest technology,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
