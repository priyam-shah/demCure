import React from "react";

function MenuItem({ image, name, onClick }) {
  return (
    <div className="menuItem" onClick={() => onClick()}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default MenuItem;
