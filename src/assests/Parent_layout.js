import React, { useState } from "react";
import "./Parent_layout.css";
import Ptitle from "./priority/Priorityt";
import Stitle from "./status/Statust"
import down from "./icons/down.svg";
import dis from "./icons/Display.svg"
import Spriority from "./status/Statusp"
import Utitle from "./user/Usertitle"
import Upriority from "./user/Userp"
import Ppriority from "./priority/Priorityp"
import { memo } from "react";

const Parent = () => {
  const [group, setGroup] = useState("Status");
  const [order, setOrder] = useState("Priority");
  const [showOptions, setShowOptions] = useState(false);

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };
  //   console.log(order, group);
  const handleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="mb1">
      {showOptions && (
        <div className="show">
          <div className="grouping">
            <div style={{ width: "50%" }}>Grouping</div>
            <div style={{ width: "50%" }}>
              <select
                className="select_box"
                value={group}
                onChange={handleGroup}
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
          </div>
          <div className="grouping">
            <div style={{ width: "50%" }}>Ordering</div>
            <div>
              <select
                className="select_box"
                value={order}
                onChange={handleOrder}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
      <div className="mb1c1">
        <div className="display_button" onClick={handleOptions}>
        <img src={dis} alt="" />
          <button id="display_button" >
            Display
          </button>
          <img src={down} alt="" />
        </div>
      </div>
      <div className="mb1c2">
        {group === "Status" && order === "Priority" && <Spriority/>}
        {group === "Status" && order === "Title" && <Stitle/>}
        {group === "User" && order === "Priority" && <Upriority/>}
        {group === "User" && order === "Title" && <Utitle/>}
        {group === "Priority" && order === "Priority" && <Ppriority/>}
        {group === "Priority" && order === "Title" && <Ptitle />}
      </div>
    </div>
  );
};

export default memo(Parent);
