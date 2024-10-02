import { useEffect, useState } from "react";
import "./Priority.css";
import sm from "../icons/add.svg";
import tdot from "../icons/3dot.svg";
import nop from "../icons/No-priority.svg";
import urgent from "../icons/SVG - Urgent Priority colour.svg";
import high from "../icons/Img - High Priority.svg";
import medium from "../icons/Img - Medium Priority.svg";
import low from "../icons/Img - Low Priority.svg";

const Stitle = () => {
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
      console.log(data);
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

  const groupedByName = groupedData.reduce((acc, person) => {
    const key = person.priority;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person);
    return acc;
  }, {});

  Object.keys(groupedByName).forEach(name => {
    groupedByName[name].sort((a, b) => b.priority - a.priority);
});

console.log(groupedByName);


  return (
    <div className="pTitles">
       {Object.keys(groupedByName).length !== 0 && (
        <div className="cards" style={{ marginLeft: "2%" }}>
          <div className="headers">
            <div className="alens">
              <img src={nop} alt="" />
              No Priority {0 in groupedByName ? groupedByName[0].length : 0}
            </div>
            <div className="sdots">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {0 in groupedByName
            ? groupedByName[0].map((user) => (
                <div className="cardcs" key={user.id}>
                  <div className="cardc1s">{user.id}</div>
                  <div className="cardc2s">{user.title}</div>
                  <div className="cardc3s">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titles">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}

      {Object.keys(groupedByName).length !== 0 && (
        <div className="cards" style={{ marginLeft: "2%" }}>
          <div className="headers">
            <div className="alens">
              <img src={urgent} alt="" />
              Urgent {4 in groupedByName ? groupedByName[4].length : 0}
            </div>
            <div className="sdots">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {4 in groupedByName
            ? groupedByName[4].map((user) => (
                <div className="cardcs" key={user.id}>
                  <div className="cardc1s">{user.id}</div>
                  <div className="cardc2s">{user.title}</div>
                  <div className="cardc3s">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titles">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}

      {Object.keys(groupedByName).length !== 0 && (
        <div className="cards" style={{ marginLeft: "2%" }}>
          <div className="headers">
            <div className="alens">
              <img src={high} alt="" />
              High {3 in groupedByName ? groupedByName[3].length : 0}
            </div>
            <div className="sdots">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {3 in groupedByName
            ? groupedByName[3].map((user) => (
                <div className="cardcs" key={user.id}>
                  <div className="cardc1s">{user.id}</div>
                  <div className="cardc2s">{user.title}</div>
                  <div className="cardc3s">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titles">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}

      {Object.keys(groupedByName).length !== 0 && (
        <div className="cards" style={{ marginLeft: "2%" }}>
          <div className="headers">
            <div className="alens">
              <img src={medium} alt="" />
              Medium {2 in groupedByName ? groupedByName[2].length : 0}
            </div>
            <div className="sdots">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {2 in groupedByName
            ? groupedByName[2].map((user) => (
                <div className="cardcs" key={user.id}>
                  <div className="cardc1s">{user.id}</div>
                  <div className="cardc2s">{user.title}</div>
                  <div className="cardc3s">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titles">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}

      {Object.keys(groupedByName).length !== 0 && (
        <div className="cards" style={{ marginLeft: "2%" }}>
          <div className="headers">
            <div className="alens">
              <img src={low} alt="" />
              Low {1 in groupedByName ? groupedByName[1].length : 0}
            </div>
            <div className="sdots">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {1 in groupedByName
            ? groupedByName[1].map((user) => (
                <div className="cardcs" key={user.id}>
                  <div className="cardc1s">{user.id}</div>
                  <div className="cardc2s">{user.title}</div>
                  <div className="cardc3s">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titles">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}

     
    </div>
  );
};

export default Stitle;
