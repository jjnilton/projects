import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  filter: string;
  onSetFilter: (filter: string) => void;
}

const ToDoListFilter = ({ filter, onSetFilter }: Props) => {

  const handleFilterChange = (event: React.MouseEvent<HTMLElement>) => {
    const buttonElement = event.target as HTMLButtonElement;
    onSetFilter(buttonElement.value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      onChange={handleFilterChange}
      sx={{ backgroundColor: "background.default", justifySelf: "center" }}
    >
      <Tooltip title="Show all To-Dos">
        <ToggleButton selected={filter === "all" ? true : false} value="all">
          All
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Show only active To-Dos">
        <ToggleButton selected={filter === "active" && true} value="active">
          Active
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Show only completed To-Dos">
        <ToggleButton
          selected={filter === "completed" && true}
          value="completed"
        >
          Completed
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
};

export default ToDoListFilter;
