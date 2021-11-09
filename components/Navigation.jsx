import styled from "styled-components";

const StyledNavigation = styled.ul``;

const Navigation = (props) => {
  const handleClick = () => {
    if (props.postVisibility) {
      props.handlePostVisibility(false);
    }

    if (props.featuredPostVisibility) {
      props.handleFeaturedPostVisibility(false);
      props.handleHomeVisibility(true);
    }
  };

  const handleContact = () => {
    props.toggleContact();
  };

  return (
    <StyledNavigation>
      <li onClick={handleClick}>Posts</li>
      <li onClick={handleContact}>Contact</li>
    </StyledNavigation>
  );
};

export default Navigation;
