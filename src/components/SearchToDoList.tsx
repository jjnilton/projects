import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortMenu from "./SortMenu";

type Props = {
  toDoListItems: JSX.Element[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOldestFirst: boolean;
  handleSortOldestFirst: (value: boolean) => void;
}

const SearchToDoList = ({toDoListItems, searchQuery, setSearchQuery, handleSortOldestFirst, sortOldestFirst}: Props) => {

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          "& > div": { width: "100%" },
          display: "grid",
          gridTemplateColumns: "max-content 1fr max-content",
          alignItems: "center",
          padding: 1,
        }}
      >
        <SearchIcon color="disabled"></SearchIcon>
        <InputBase
          placeholder="Search To-Dos"
          aria-label="Search To-Dos"
          title="Search To-Dos"
          disabled={toDoListItems.length < 1}
          sx={{
            "& .MuiInputBase-input": {
              padding: 1,
              paddingLeft: 1,
              transition: "width 1s",
              width: "100%",
            },
          }}
          value={searchQuery}
          onChange={handleSearch}
        ></InputBase>
        <SortMenu handleSortOldestFirst={handleSortOldestFirst} sortOldestFirst={sortOldestFirst}></SortMenu>
      </Paper>
    </>
  );
};

export default SearchToDoList;