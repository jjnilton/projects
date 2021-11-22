import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import { Typography } from "@mui/material";

type Props = {
  filter: string;
  onSetFilter: (filter: string) => void;
  toDoCount: number;
  completedCount: number;
};

const ToDoListFilter = ({
  filter,
  onSetFilter,
  toDoCount,
  completedCount,
}: Props) => {
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
        <ToggleButton
          selected={filter === "all" ? true : false}
          value="all"
        >
          All
          <Badge
            badgeContent={toDoCount}
            color="primary"
            showZero
            sx={{
              marginLeft: 2,
              marginRight: 1,
              filter:
                filter !== "all" ? "grayscale(1) opacity(.75)" : undefined,
            }}
          ></Badge>
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Show only active To-Dos">
        <ToggleButton
          selected={filter === "active" && true}
          value="active"
        >
          Active
          <Badge
            badgeContent={toDoCount - completedCount}
            color="primary"
            showZero
            sx={{
              marginLeft: 2,
              marginRight: 1,
              filter:
                filter !== "active" ? "grayscale(1) opacity(.75)" : undefined,
            }}
          ></Badge>
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Show only completed To-Dos">
        <ToggleButton
          selected={filter === "completed" && true}
          value="completed"
        >
            Completed
          <Badge
            badgeContent={completedCount}
            color="primary"
            showZero
            sx={{
              marginLeft: 2,
              marginRight: 1,
              filter:
                filter !== "completed"
                  ? "grayscale(1) opacity(.75)"
                  : undefined,
            }}
          ></Badge>
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
};

export default ToDoListFilter;
