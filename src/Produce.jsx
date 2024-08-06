import React from "react";
import { useParams } from "react-router-dom";
import { produceData } from "./Data";

const Produce = () => {
  const { id } = useParams();
  console.log(id);

  const filterData = produceData.filter((e) => e.id == id);

  console.log(filterData);

  return (
    <div>
      {filterData.map((e, i) => {
        return (
          <div style={{ display: "flex" }} key={i}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  height: "100dvh",
                  display: "flex",
                  justifyContent: "center",
                }}
                src={e.image}
                alt={e.title}
              />
            </div>
            <div style={{ width: "50%" }}>
              <h1>{e.title}</h1>
              <p>{e.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Produce;
