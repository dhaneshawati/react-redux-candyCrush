import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import {
  levelFailed,
  levelRetry,
  resetLevel,
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

export default function GameLostWModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const handleExit = () => {
    setOpen(false);
    dispatch(resetLevel());
  };
  const handleRetry = () => {
    setOpen(false);
    dispatch(levelFailed());
    dispatch(levelRetry());
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
              You Lost!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              Retry again?
            </Typography>
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
                onClick={handleRetry}
                sx={{ mt: 5, ml: 5 }}
                variant="contained"
                color="success"
              >
                Retry
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
