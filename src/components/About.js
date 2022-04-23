import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = (props) => {
  return (
    <div>
      <div className="container">
        <h4 className="center">About</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab voluptas aspernatur inventore
          consequatur labore aliquid nisi, nostrum iusto alias aut excepturi exercitationem ea
          repellendus non porro sed dicta tenetur laudantium?
        </p>
      </div>
    </div>
  );
};

export default Rainbow(About);
