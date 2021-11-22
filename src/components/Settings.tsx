import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
  Box,
  Typography
} from "@mui/material";

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Settings = ({toggleDarkMode, darkMode}: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
      <Typography variant="h4" component="h4">Settings</Typography>
      <FormControl>
        <FormLabel>Dark Mode</FormLabel>
        <FormHelperText sx={{ marginLeft: 0, marginRight: 0 }}>Enable or disable the Dark Mode</FormHelperText>
        <FormGroup>
          <FormControlLabel
            label="Dark Mode"
            control={<Switch defaultChecked={darkMode} onChange={toggleDarkMode}></Switch>}
          ></FormControlLabel>
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Settings;
