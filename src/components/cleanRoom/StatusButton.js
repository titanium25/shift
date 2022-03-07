import React, {useState} from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setStatus} from "../../store/toolReducer";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";

const unavailable = {
    backgroundColor: "rgba(110,91,85,0.12)",
    color: "#808080",
    margin: "10px",
    border: '1px solid #808080',
    width: '100px'
}

const StatusButton = (props) => {
    const dispatch = useDispatch();
    const tool = useSelector(state => state.entities.tools.tool);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (status) => {
        handleClickOpen()
        dispatch(setStatus(status))
    };
    return (
        <>
            <Button
                style={tool.status !== props.status ? {
                    backgroundColor: props.status === 'UP' ? "rgba(23,255,0,0.4)"
                        : props.status === 'SD' ? "rgba(255,223,0,0.68)" :
                            props.status === 'USD' ? "rgba(255,0,59,0.58)" :
                                "rgba(0,128,255,0.58)",
                    color: "#000",
                    margin: "10px",
                    border: '1px solid #000',
                    width: '100px'
                } : unavailable}
                disabled={tool.status === props.status}
                onClick={() => handleChange(props.status)}
                variant="outlined"
            >
                {props.status}
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type in new event
                    </DialogContentText>
                    <br/>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Tool name"
                        type="text"
                        fullWidth
                        defaultValue={tool.iName}
                    />
                    <TextField
                        autoFocus
                        multiline
                        maxRows={4}
                        rows={4}
                        margin="dense"
                        id="activity"
                        label="Activity"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="so"
                        label="SO number"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
        </>

    );
};

export default StatusButton;
