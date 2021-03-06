import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  dialogVisibility: boolean;
  toggleDialog: () => void;
  removeToDo: () => void;
};

const DeleteConfirmation = ({
  dialogVisibility,
  toggleDialog,
  removeToDo,
}: Props): JSX.Element => {
  const handleClose = (): void => {
    toggleDialog();
  };

  const handleRemove = (): void => {
    toggleDialog();
    removeToDo();
  };

  return (
    <Dialog onClose={handleClose} open={dialogVisibility}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you really want to delete this To-Do?
          <br />
          This can't be undone.
        </DialogContentText>
        <DialogActions>
          <Button onClick={toggleDialog} sx={{ color: 'text.primary' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleRemove}
            startIcon={<DeleteIcon />}
          >
            Delete Permanently
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmation;
