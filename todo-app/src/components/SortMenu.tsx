import {
  Box, IconButton, Menu, MenuItem, Tooltip,
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { useState } from 'react';

type Props = {
  handleSortOldestFirst: (value: boolean) => void;
  sortOldestFirst: boolean;
  toDoListItems: JSX.Element[];
};

const SortMenu = ({
  handleSortOldestFirst,
  sortOldestFirst,
  toDoListItems,
}: Props): JSX.Element => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const menuVisible = Boolean(anchorElement);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const sortToOldestFirst = () => {
    handleSortOldestFirst(true);
    handleClose();
  };

  const sortToNewestFirst = () => {
    handleSortOldestFirst(false);
    handleClose();
  };

  return (
    <Box>
      <Tooltip title="Sort list">
        <span>
          <IconButton onClick={handleOpen} disabled={toDoListItems.length === 0}>
            <SortIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Menu open={menuVisible} anchorEl={anchorElement} onClose={handleClose}>
        <MenuItem selected={!sortOldestFirst} onClick={sortToNewestFirst}>
          Newest
        </MenuItem>
        <MenuItem selected={sortOldestFirst} onClick={sortToOldestFirst}>
          Oldest
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SortMenu;
