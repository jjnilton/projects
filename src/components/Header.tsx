import NoteIcon from "@mui/icons-material/Note";
import { IconButton, Typography } from "@mui/material";
import classes from "./Header.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";

type Props = {
  toggleDrawerVisibility: () => void;
}

const Header = ({toggleDrawerVisibility}: Props) => {
  return (
    <>
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".25em"
      }}
    >
      <NoteIcon sx={{ fontSize: 56 }} color="primary"></NoteIcon>
      <Typography
        variant="h3"
        component="h1"
        color="primary"
        className={classes.title}
      >
        To-Do App
      </Typography>
      <IconButton sx={{ marginLeft: "auto"}} onClick={toggleDrawerVisibility}>
        <SettingsIcon sx={{ fontSize: 48 }}></SettingsIcon>
      </IconButton>
    </header>
    </>
  );
};

export default Header;
