import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Real Cats</h5>
          <p className="sub-text">
            Cats need an unimaginable amount of attention to keep them feeling
            loved. Don't just let your cat stray and give it lots of cuddles! :)
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Dogs</h5>
          <p className="sub-text">Dogs are amazing! purr roof roof.</p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Friends</h5>
          <p className="sub-text">Cats and dogs can also be best friends :)</p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
