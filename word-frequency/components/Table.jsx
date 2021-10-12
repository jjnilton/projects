import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  padding: 10px;
  table {
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
  }
  th,
  td {
    border-bottom: 2px solid white;
    padding: 5px;
  }
  th {
    cursor: pointer;
    background-color: slateblue;
    color: white;
    white-space: nowrap;
    user-select: none;
  }
  tbody > tr > td {
    word-break: break-all;
    & mark {
      background-color: #3d2bb6;
      color: white;
    }
  }
  tr:nth-child(odd) {
    background-color: #eee;
  }
  th:first-of-type {
    background-color: ${(props) => props.sort.type === "alpha" && "#3d2bb6"};
  }
  th:last-of-type {
    background-color: ${(props) => props.sort.type === "occur" && "#3d2bb6"};
  }
  #filter {
    width: 100%;
    display: flex;
    padding: 10px 0;
    align-items: center;
    & > input[type="text"] {
      margin-left: 5px;
      border: 2px solid slateblue;
      border-radius: 5px;
      height: 2em;
      width: 100%;
    }
    & > label[for="case"] {
      font-size: 0.6em;
      margin-left: 5px;
      text-align: center;
    }
  }
  .icon-search {
    color: slateblue;
  }
`;

const Table = (props) => {
  const [occurrences, setOccurrences] = useState([]);
  const [sort, setSort] = useState({
    type: "occur",
    order: "desc",
  });
  const filterRef = useRef();
  const [filteredOccurrences, setFilteredOccurrences] = useState([]);
  const [filterMatch, setFilterMatch] = useState();
  const caseSensibilityRef = useRef();

  const sortOccurrences = (array, type, order) => {
    const sorted = [...array];
    if (type === "occur" && order === "desc") {
      sorted.sort((a, b) => (a[1] > b[1] ? -1 : 1));
      setSort({ type: "occur", order: "desc" });
    }
    if (type === "occur" && order === "asc") {
      sorted.sort((a, b) => (a[1] < b[1] ? -1 : 1));
      setSort({ type: "occur", order: "asc" });
    }
    if (type === "alpha" && order === "desc") {
      sorted.sort((a, b) => (a[0] > b[0] ? -1 : 1));
      setSort({ type: "alpha", order: "desc" });
    }
    if (type === "alpha" && order === "asc") {
      sorted.sort((a, b) => (a[0] < b[0] ? -1 : 1));
      setSort({ type: "alpha", order: "asc" });
    }
    return sorted;
  };

  useEffect(() => {
    setOccurrences(
      sortOccurrences(Object.entries(props.data), sort.type, sort.order)
    );
  }, [props.data]);

  useEffect(() => {
    setFilteredOccurrences(
      sortOccurrences(Object.entries(props.data), sort.type, sort.order)
    );
  }, [occurrences]);

  const sortByOccurrence = () => {
    let sorted = filteredOccurrences;

    if (sort.type === "occur" && sort.order === "desc") {
      sorted = sortOccurrences(sorted, "occur", "asc");
    } else {
      sorted = sortOccurrences(sorted, "occur", "desc");
    }
    setFilteredOccurrences(sorted);
  };

  const sortAlphabetically = () => {
    let sorted = filteredOccurrences;

    if (sort.type === "alpha" && sort.order === "desc") {
      sorted = sortOccurrences(sorted, "alpha", "asc");
    } else {
      sorted = sortOccurrences(sorted, "alpha", "desc");
    }
    setFilteredOccurrences(sorted);
  };

  const handleFilter = () => {
    const query = filterRef.current.value;
    const regex = new RegExp(
      `^${query}`,
      caseSensibilityRef.current.checked ? "g" : "gi"
    );
    const filtered = occurrences.filter((item) => {
      return item[0].match(regex);
    });
    setFilteredOccurrences(filtered);
    setFilterMatch(filterRef.current.value); // s
  };

  const tableRows = filteredOccurrences.map((item, index) => {
    const regex = new RegExp(`^(${filterMatch})`, "gi")
    const word = item[0].replace(regex, `<mark>${'$1'}</mark>`);
    return (
      <tr key={index}>
        <td dangerouslySetInnerHTML={{ __html: word }}></td>
        <td>{item[1]}</td>
      </tr>
    );
  });

  return (
    <StyledTable sort={sort}>
      <div id="filter">
        <label htmlFor="filter">
          <i className="icon-search"></i>
        </label>
        <input
          ref={filterRef}
          type="text"
          onChange={handleFilter}
          placeholder="Filter results"
        />
        <label htmlFor="case">Case sensitive</label>
        <input id="case" name="case" ref={caseSensibilityRef} type="checkbox" onChange={handleFilter} />
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={sortAlphabetically}>
              Word
              {sort.type === "alpha" && sort.order === "desc" ? (
                <i className="icon-sort-name-down"></i>
              ) : (
                <i className="icon-sort-name-up"></i>
              )}
            </th>
            <th onClick={sortByOccurrence}>
              Occurrences
              {sort.type === "occur" && sort.order === "desc" ? (
                <i className="icon-sort-number-down"></i>
              ) : (
                <i className="icon-sort-number-up"></i>
              )}
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </StyledTable>
  );
};

export default Table;