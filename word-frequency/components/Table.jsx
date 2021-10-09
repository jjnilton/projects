import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledTable = styled.div``;

export const Table = (props) => {
  const [occurrences, setOccurrences] = useState([]);
  const [sort, setSort] = useState({
    type: "occur",
    order: "desc",
  });

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

  const sortByOccurrence = () => {
    let sorted = occurrences;

    if (sort.type === "occur" && sort.order === "desc") {
      sorted = sortOccurrences(sorted, "occur", "asc");
    } else {
      sorted = sortOccurrences(sorted, "occur", "desc");
    }
    setOccurrences(sorted);
  };

  const sortAlphabetically = () => {
    let sorted = occurrences;

    if (sort.type === "alpha" && sort.order === "desc") {
      sorted = sortOccurrences(sorted, "alpha", "asc");
    } else {
      sorted = sortOccurrences(sorted, "alpha", "desc");
    }
    setOccurrences(sorted);
  };

  const elements = occurrences.map((item, index) => {
    return (
      <li key={index}>
        {item[0]}: {item[1]}
      </li>
    );
  });

  return (
    <StyledTable>
      <div>
        Sorting by {sort.type} {sort.order}
      </div>
      <button onClick={sortByOccurrence}>
        By occurrence {sort.type === "occur" && sort.order}
      </button>
      <button onClick={sortAlphabetically}>
        By word {sort.type === "alpha" && sort.order}
      </button>
      <ul>{elements}</ul>
    </StyledTable>
  );
};
