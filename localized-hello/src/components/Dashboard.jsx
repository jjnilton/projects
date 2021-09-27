import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logout, updateData } from "../store";
import { useEffect } from "react";

const StyledDashboard = styled.div`
  min-width: 280px;
  div#hello {
    font-size: 2em;
    background-color: lightblue;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    & > span:nth-child(2) {
      color: royalblue;
      font-weight: bold;
    }
  }
  div#data {
    & > ul {
      display: grid;
      gap: 5px;
      padding: 0;
      & > li {
        list-style: none;
        background-color: lightblue;
        display: grid;
        border-radius: 5px;
        grid-template-columns: minmax(100px, 0.3fr) 1fr;
        & > span:first-child {
          background-color: royalblue;
          color: white;
          height: 100%;
          padding: 5px;
          border-radius: 5px 0 0 5px;
          text-align: center;
          display: grid;
          align-items: center;
          text-transform: uppercase;
        }
        & > span:last-child {
          word-break: break-all;
          padding: 5px;
        }
      }
    }
  }
  button {
    background-color: orangered;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    margin-top: 10px;
    width: 100px;
  }
  #logout-message {
    & > div:first-child {
      font-size: 2em;
    }
  }
`;

const Dashboard = () => {
  const data = useSelector((state) => state.data);
  const username = useSelector((state) => state.login.username);
  const language = useSelector((state) => state.login.language);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(updateData({ type: "RESET" }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchCountryCode = async () => {
        const response = await fetch("https://freegeoip.app/json");
        const ipData = await response.json();
        return ipData;
      };

      const ipData = await fetchCountryCode();
      const paramsObj = language
        ? { lang: language }
        : { cc: ipData.country_code };
      const searchParams = new URLSearchParams(paramsObj);

      const fetchHello = async () => {
        const response = await fetch(
          `https://fourtonfish.com/hellosalut/?${searchParams.toString()}`
        );
        const hello = await response.json();
        dispatch(updateData({ value: ipData, status: true, hello: hello }));
        return hello;
      };

      fetchHello();
    };

    fetchData();
  }, [dispatch, language]);

  const dataInfo = [];
  for (const key in data.value) {
    dataInfo.push(
      <li key={key}>
        <span>{key.replace("_", " ")}</span> <span>{data.value[key]}</span>
      </li>
    );
  }

  return (
    <StyledDashboard>
      <>
        {data.isLoaded ? (
          <div id="hello">
            <span
              dangerouslySetInnerHTML={{ __html: data?.hello?.hello }}
            ></span>{" "}
            <span>{username}</span>
            <span>, you have successfully logged in!</span>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div id="data">
          <ul>{dataInfo}</ul>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </>
    </StyledDashboard>
  );
};

export default Dashboard;
