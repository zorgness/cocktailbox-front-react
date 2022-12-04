import React from "react";
import Popular from "../components/Popular";
import Filter from "./Filter";

const HomePage = () => {
  return (
    <div>
      <div
        className="card-category"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://www.trucsdenana.com/wp-content/uploads/2017/06/cocktail-1.jpg)`,
        }}
      >
        <h1 className="text-center mx-3 d-flex align-items-center">
          Cocktail Box
        </h1>
      </div>

      {/* <div className="d-flex justify-content-around align-items-center flex-wrap my-5 gap-4">
        <h1 className="text-center mx-3 d-flex align-items-center">
          {" "}
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/905/905477.png"
              alt=""
              className="avatar-square2"
              style={{ opacity: "0.8" }}
            />
          </span>
        </h1>
      </div> */}

      <div>
        <div className="d-flex flex-column mt-5">
          <Filter />

          <Popular />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
