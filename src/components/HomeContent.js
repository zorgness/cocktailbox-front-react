import React from "react";

const HomeContent = () => {
  return (
    <div className="container-homecontent">
      <div
        className="item a"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://www.trucsdenana.com/wp-content/uploads/2017/06/cocktail-1.jpg)`,
        }}
      >
        CocktailBox
      </div>
      <div className="item b">B</div>
      <div className="item c">C</div>
      <div className="item d">D</div>
      <div className="item e">E</div>
      <div className="item f">F</div>
      <div className="item g">G</div>
    </div>
  );
};

export default HomeContent;
