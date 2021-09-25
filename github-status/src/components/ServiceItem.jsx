import styled from "styled-components";

const StyledServiceItem = styled.li`
  display: grid;
  row-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  padding: 5px;
  background-color: ${(props) =>
    props.status !== "operational" ? "#181111" : "#1b221b"};
  color: #eee;
  border: 3px solid ${(props) => (props.status !== "operational" ? "#850e0e" : "green")};
  border-radius: 5px;
  & > .name {
    font-weight: bold;
    font-size: 1.25em;
    grid-column: 1 / 3;
  }
  & > .status {
    background: ${(props) => (props.status !== "operational" ? "#640a0a" : "#106810")};
    color: white;
    grid-column: 3 / 4;
    border-radius: 5px;
    padding: 3px;
    text-align: center;
    font-size: 0.8em;
    display: grid;
    align-items: center;
  }
  & > .description {
    grid-column: 1 / -1;
    min-height: 2em;
  }
  & > .updated {
    grid-column: 1 / -1;
    text-align: right;
    font-size: 0.9em;
  }
`;

const ServiceItem = (props) => {
  return (
    <StyledServiceItem status={props.service.status}>
      <div className="name">{props.service.name}</div>
      <div className="status">{props.service.status.toUpperCase()}</div>
      <div className="description">{props.service.description}</div>
      <div className="updated">Last updated at {new Date(props.service.updated_at).toLocaleString(undefined, {dateStyle:"medium", timeStyle: "medium"})}</div>
    </StyledServiceItem>
  );
};

export default ServiceItem;
