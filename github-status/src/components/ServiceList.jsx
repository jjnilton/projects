import styled from "styled-components";
import ServiceItem from "./ServiceItem";

const StyledServiceList = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 10px;
  padding: 0;
`;

const ServiceList = (props) => {
  const services = props.services.map((service) => {
    return service.description && <ServiceItem service={service}></ServiceItem>;
  });

  return <StyledServiceList>{services}</StyledServiceList>;
};

export default ServiceList;
