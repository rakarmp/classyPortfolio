import React from "react";

function Intro() {
  function newTyped() {}
  $(function () {
    $("#typed").typed({
      // Change to edit type effect
      strings: ["home any pnalet", "in your galaxy", "everywhere"],

      typeSpeed: 90,
      backDelay: 700,
      contentType: "html",
      loop: !0,
      resetCallback: function () {
        newTyped();
      },
    }),
      $(".reset").click(function () {
        $("#typed").typed("reset");
      });
  });
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
              <span id="typed"></span>
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
