import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  table {
    border-collapse: collapse;
    min-width: 300px;
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
    display: grid;
    grid-template-columns: max-content 1fr;
    padding: 10px 0;
    align-items: center;
    & > input {
      margin: 0 5px;
    }
  }
`;

export const Table = (props) => {
  const [occurrences, setOccurrences] = useState([]);
  const [sort, setSort] = useState({
    type: "occur",
    order: "desc",
  });
  const filterRef = useRef();
  const [filteredOccurrences, setFilteredOccurrences] = useState([]);

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
    const regex = new RegExp(`^${query}`, "g");
    const filtered = occurrences.filter((item) => item[0].match(regex));
    setFilteredOccurrences(filtered);
  };

  const tableRows = filteredOccurrences.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
      </tr>
    );
  });

  return (
    <StyledTable sort={sort}>
      <div>
        Sorting by {sort.type} {sort.order}
      </div>
      <div id="filter">
        <label htmlFor="filter"><i className="icon-search"></i></label>
        <input
          ref={filterRef}
          type="text"
          onChange={handleFilter}
          placeholder="Filter results"
        />
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
              No. of Occurrences
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
