import { useEffect, useState } from "react";
import "./User.css";
import sm from "../icons/add.svg";
import tdot from "../icons/3dot.svg";
import Backlog from "../icons/Backlog.svg";
import nop from "../icons/No-priority.svg";
import Sta from "./Sta";

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

  const groupedByName = groupedData.reduce((acc, person) => {
    const key = person.name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person);
    return acc;
  }, {});

  Object.keys(groupedByName).forEach((name) => {
    groupedByName[name].sort((a, b) => a.title.localeCompare(b.title));
  });

  console.log(groupedByName);

  return (
    <div className="pTitleu">
      {Object.keys(groupedByName).length !== 0 && (
        <div className="cardu" style={{ marginLeft: "2%" }}>
          <div className="headeru">
            <div className="alenu">
              <img src={Backlog} alt="" />
              Anoop sharma{" "}
              {"Anoop sharma" in groupedByName
                ? groupedByName["Anoop sharma"].length
                : 0}
            </div>
            <div className="sdotu">
              <img src={sm} alt="" style={{ width: "20px" }} />
              <img src={tdot} alt="" style={{ width: "20px" }} />
            </div>
          </div>
          {"Anoop sharma" in groupedByName
            ? groupedByName["Anoop sharma"].map((user) => (
                <div className="cardcu" key={user.id}>
                  <div className="cardc1u">{user.id}</div>
                  <div className="cardc2u">
                    <div className="status_logo1">
                      {" "}
                      <Sta val={user.status} />
                    </div>
                    <div className="titleu1"> {user.title}</div>
                  </div>
                  <div className="cardc3u">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titleu">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}

      {Object.keys(groupedByName).length !== 0 && (
        <div className="cardu" style={{ marginLeft: "2%" }}>
          <div className="headeru">
            <div className="alenu">
              <img src={Backlog} alt="" />
              Ramesh{" "}
              {"Ramesh" in groupedByName ? groupedByName["Ramesh"].length : 0}
            </div>
            <div className="sdotu">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {"Ramesh" in groupedByName
            ? groupedByName["Ramesh"].map((user) => (
                <div className="cardcu" key={user.id}>
                  <div className="cardc1u">{user.id}</div>
                  <div className="cardc2u">
                    <div className="status_logo1">
                      {" "}
                      <Sta val={user.status} />
                    </div>
                    <div className="titleu1"> {user.title}</div>
                  </div>
                  <div className="cardc3u">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titleu">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
      {Object.keys(groupedByName).length !== 0 && (
        <div className="cardu" style={{ marginLeft: "2%" }}>
          <div className="headeru">
            <div className="alenu">
              <img src={Backlog} alt="" />
              Shankar Kumar{" "}
              {"Shankar Kumar" in groupedByName
                ? groupedByName["Shankar Kumar"].length
                : 0}
            </div>
            <div className="sdotu">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {"Shankar Kumar" in groupedByName
            ? groupedByName["Shankar Kumar"].map((user) => (
                <div className="cardcu" key={user.id}>
                  <div className="cardc1u">{user.id}</div>
                  <div className="cardc2u">
                    <div className="status_logo1">
                      {" "}
                      <Sta val={user.status} />
                    </div>
                    <div className="titleu1"> {user.title}</div>
                  </div>
                  <div className="cardc3u">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titleu">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
      {Object.keys(groupedByName).length !== 0 && (
        <div className="cardu" style={{ marginLeft: "2%" }}>
          <div className="headeru">
            <div className="alenu">
              <img src={Backlog} alt="" />
              Suresh{" "}
              {"Suresh" in groupedByName ? groupedByName["Suresh"].length : 0}
            </div>
            <div className="sdotu">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {"Suresh" in groupedByName
            ? groupedByName["Suresh"].map((user) => (
                <div className="cardcu" key={user.id}>
                  <div className="cardc1u">{user.id}</div>
                  <div className="cardc2u">
                    <div className="status_logo1">
                      {" "}
                      <Sta val={user.status} />
                    </div>
                    <div className="titleu1"> {user.title}</div>
                  </div>
                  <div className="cardc3u">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titleu">{user.tag[0]}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
      {Object.keys(groupedByName).length !== 0 && (
        <div className="cardu" style={{ marginLeft: "2%" }}>
          <div className="headeru">
            <div className="alenu">
              <img src={Backlog} alt="" />
              Yogesh{" "}
              {"Yogesh" in groupedByName ? groupedByName["Yogesh"].length : 0}
            </div>
            <div className="sdotu">
              <img src={sm} alt="" />
              <img src={tdot} alt="" />
            </div>
          </div>
          {"Yogesh" in groupedByName
            ? groupedByName["Yogesh"].map((user) => (
                <div className="cardcu" key={user.id}>
                  <div className="cardc1u">{user.id}</div>
                  <div className="cardc2u">
                    <div className="status_logo1">
                      {" "}
                      <Sta val={user.status} />
                    </div>
                    <div className="titleu1"> {user.title}</div>
                  </div>
                  <div className="cardc3u">
                    <div className="status_logos">
                      <img style={{ width: "100%" }} src={nop} alt="" />
                    </div>
                    <div className="titleu">{user.tag[0]}</div>
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
