import NoteIcon from '@mui/icons-material/Note';
import { IconButton, Tooltip, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import classes from './Header.module.scss';

type Props = {
  toggleDrawerVisibility: () => void;
};

const Header = ({ toggleDrawerVisibility }: Props): JSX.Element => (
  <header
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '.25em',
    }}
  >
    <NoteIcon sx={{ fontSize: 36 }} color="primary" />
    <Typography
      variant="h5"
      component="h1"
      color="primary"
      className={classes.title}
    >
      To-Do App
    </Typography>
    <Tooltip title="Settings">
      <IconButton
        sx={{ marginLeft: 'auto' }}
        onClick={toggleDrawerVisibility}
      >
        <SettingsIcon sx={{ fontSize: 36 }} />
      </IconButton>
    </Tooltip>
  </header>
);

export default Header;
