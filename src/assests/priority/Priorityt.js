import { useEffect, useState } from "react";
import "./Priority.css";
import sm from "../icons/add.svg";
import tdot from "../icons/3dot.svg";
import nop from "../icons/No-priority.svg";
import urgent from "../icons/SVG - Urgent Priority colour.svg";
import high from "../icons/Img - High Priority.svg";
import medium from "../icons/Img - Medium Priority.svg";
import low from "../icons/Img - Low Priority.svg";
import Sta from "./Sta";
import { memo } from "react";

const FetchByPtitle = () => {
  const [data, setData] = useState({});
  const [groupedData, setGroupData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      const mergedArray = data.tickets.map((item1) => {
        const item2 = data.users.find((item) => item.id === item1.userId);
        if (item2) {
          return {
            ...item1,
            name: item2.name,
            available: item2.available,
          };
        }
        return item1;
      });
      setGroupData(mergedArray);
    }
  }, [data]);
 
  let dynamicArrayOfArrays = [[], [], [], [], []];
  const ticketArray = Object.values(groupedData);
  

  ticketArray.forEach((ticket) => {
    const priority = ticket.priority;
    dynamicArrayOfArrays[priority].push(ticket);
  });
  console.log(dynamicArrayOfArrays);

  return (
    <div className="pTitle">
      <div className="cards" style={{ marginLeft: "2%" }}>
        <div className="header">
          <div className="alen">
            <img src={nop} alt="" /> No priority{" "}
            {dynamicArrayOfArrays[0].length}
          </div>
          <div className="sdot">
            <img src={sm} alt="" />
            <img src={tdot} alt="" />
          </div>
        </div>
        {dynamicArrayOfArrays[0].map((user) => (
          <div className="cardc">
            <div className="cardc1">{user.id}</div>
            <div className="cardc2">
              <div className="status_logo">
                <Sta val={user.status} />{" "}
              </div>
              <div className="title"> {user.title}</div>
            </div>
            <div className="cardc3">{user.tag[0]}</div>
          </div>
        ))}
      </div>

      <div className="cards" style={{ marginLeft: "2%" }}>
        <div className="header">
          <div className="alen">
            <img src={urgent} alt="" /> Urgent {dynamicArrayOfArrays[4].length}
          </div>
          <div className="sdot">
            <img src={sm} alt="" />
            <img src={tdot} alt="" />
          </div>
        </div>
        {dynamicArrayOfArrays[4].map((user) => (
          <div className="cardc">
            <div className="cardc1">{user.id}</div>
            <div className="cardc2">
            <div className="status_logo">
                <Sta val={user.status} />{" "}
              </div>
              <div className="title"> {user.title}</div>
            </div>
            <div className="cardc3">{user.tag[0]}</div>
          </div>
        ))}
      </div>
      <div className="cards" style={{ marginLeft: "2%" }}>
        <div className="header">
          <div className="alen">
            <img src={high} alt="" /> High {dynamicArrayOfArrays[3].length}
          </div>
          <div className="sdot">
            <img src={sm} alt="" />
            <img src={tdot} alt="" />
          </div>
        </div>
        {dynamicArrayOfArrays[3].map((user) => (
          <div className="cardc">
            <div className="cardc1">{user.id}</div>
            <div className="cardc2">
            <div className="status_logo">
                <Sta val={user.status} />{" "}
              </div>
              <div className="title"> {user.title}</div>
            </div>
            <div className="cardc3">{user.tag[0]}</div>
          </div>
        ))}
      </div>

      <div className="cards" style={{ marginLeft: "2%" }}>
        <div className="header">
          <div className="alen">
            <img src={medium} alt="" /> Medium {dynamicArrayOfArrays[2].length}
          </div>
          <div className="sdot">
            <img src={sm} alt="" />
            <img src={tdot} alt="" />
          </div>
        </div>
        {dynamicArrayOfArrays[2].map((user) => (
          <div className="cardc">
            <div className="cardc1">{user.id}</div>
            <div className="cardc2">
            <div className="status_logo">
                <Sta val={user.status} />{" "}
              </div>
              <div className="title"> {user.title}</div>
            </div>
            <div className="cardc3">{user.tag[0]}</div>
          </div>
        ))}
      </div>
      <div className="cards" style={{ marginLeft: "2%" }}>
        <div className="header">
          <div className="alen">
            <img src={low} alt="" /> Low {dynamicArrayOfArrays[1].length}
          </div>
          <div className="sdot">
            <img src={sm} alt="" />
            <img src={tdot} alt="" />
          </div>
        </div>
        {dynamicArrayOfArrays[1].map((user) => (
          <div className="cardc">
            <div className="cardc1">{user.id}</div>
            <div className="cardc2">
            <div className="status_logo">
                <Sta val={user.status} />{" "}
              </div>
              <div className="title"> {user.title}</div>
            </div>
            <div className="cardc3">{user.tag[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FetchByPtitle);
