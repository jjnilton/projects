import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
  Box,
  Typography,
} from "@mui/material";

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
  toggleSafeDelete: () => void;
  safeDelete: boolean;
};

const Settings = ({
  toggleDarkMode,
  darkMode,
  toggleSafeDelete,
  safeDelete,
}: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: 2, width: "300px" }}>
      <Typography variant="h4" component="h4" sx={{ marginBottom: 2 }}>
        Settings
      </Typography>
      <FormControl>
        <FormLabel>Dark Mode</FormLabel>
        <FormHelperText sx={{ marginLeft: 0, marginRight: 0 }}>
          Enable or disable the Dark Mode
        </FormHelperText>
        <FormGroup>
          <FormControlLabel
            label="Dark Mode"
            control={
              <Switch checked={darkMode} onChange={toggleDarkMode}></Switch>
            }
          ></FormControlLabel>
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Delete behavior</FormLabel>
        <FormHelperText sx={{ marginLeft: 0, marginRight: 0 }}>
          Control the behavior of the Delete button
        </FormHelperText>
        <FormGroup>
          <FormControlLabel
            label="Ask confirmation"
            control={
              <Switch checked={safeDelete} onChange={toggleSafeDelete}></Switch>
            }
          ></FormControlLabel>
          { !safeDelete && <FormHelperText
            sx={{ color: "error.main", marginLeft: 0, marginRight: 0 }}
          >
            Caution: You won't be asked for confirmation when deleting a To-Do.
          </FormHelperText>}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Settings;
