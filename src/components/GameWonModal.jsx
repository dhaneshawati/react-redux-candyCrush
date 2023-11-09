import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  levelSuccess,
  nextLevel,
  resetLevel,
  updateGoal,
  updateMoves,
} from "../redux/actions/actionCreator";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  rowGap: "20",
};

export default function GameWonModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const handleExit = () => {
    setOpen(false);
    dispatch(resetLevel());
  };
  const handleNextLevel = () => {
    setOpen(false);
    dispatch(updateGoal(5));
    dispatch(levelSuccess());
    dispatch(nextLevel());
    dispatch(updateMoves());
  };
  return (
    <div className="wonModal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
              You Won!
            </Typography>
            <Rating
              name="read-only"
              value={3}
              max={3}
              size="large"
              sx={{ mt: 5 }}
              readOnly
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={handleExit}
                sx={{ mt: 5 }}
                variant="contained"
                color="error"
              >
                Exit
              </Button>
              <Button
                onClick={handleNextLevel}
                sx={{ mt: 5, ml: 5 }}
                variant="contained"
                color="success"
              >
                Next
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
