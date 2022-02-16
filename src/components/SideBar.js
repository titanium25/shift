import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import '../assets/sideBar.css';
import {Button, ClickAwayListener, IconButton, Tooltip} from "@mui/material";
import {setStatus} from '../store/toolReducer';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import ToolDetails from "./ToolDetails";
import ToolButtons from "./ToolButtons";

const SideBar = () => {

    const tool = useSelector(state => state.entities.tools.tool);
    const [openActivity, setOpenActivity] = useState(false);
    const show = Object.keys(tool).length !== 0;

    const handleCloseActivity = () => {
        setOpenActivity(false);
    };

    return (
        <div>
            {show &&
                <div>
                    <ToolDetails />
                    <ToolButtons />
                </div>
            }
            <Dialog open={openActivity} onClose={handleCloseActivity}>
                <DialogTitle>New activity on {tool.iName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type in activity
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="activity"
                        label="Activity"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <DialogContentText>
                        Service Order
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="so"
                        label="Service Order"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseActivity}>Cancel</Button>
                    <Button onClick={handleCloseActivity}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SideBar;
