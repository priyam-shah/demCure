import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

import Family from "./Images/fam.jpeg";
import lif from "./Images/lif.gif";
import lif1 from "./Images/lif1.gif";
import Jigsaw from "./Images/giphy.gif";
import Crossboard from "./Images/crossboard.jpg";

import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  return (
    <div className="menu">
      <h1 className="menuTitle">The place where you cannot forget anything</h1>
      <div className="menuList">
        <MenuItem
          image={Family}
          name={"Memory Feed"}
          onClick={() => history.push("/posts")}
        />

        <MenuItem
          image={Jigsaw}
          name={"Cards"}
          onClick={() => history.push("/games/cards")}
        />
        <MenuItem
          image={Crossboard}
          name={"Slide"}
          onClick={() => history.push("/")}
        />
        <MenuItem
          image={lif1}
          name={"Record my Life"}
          onClick={() => history.push("/can")}
        />
        <MenuItem
          image={lif}
          name={"Watch my life"}
          onClick={() => history.push("/can")}
        />

        {/* {MenuList.map((menuItem, key) => {
          // return (
          //   <MenuItem
          //     key={key}
          //     image={menuItem.image}
          //     name={menuItem.name}
          //   />
          // );

          return (
            <MenuItem
              key={key}
              image={Family}
              name={"Family deed"}
            />
            
          );

        } */}
      </div>
    </div>
  );
}

export default Menu;
