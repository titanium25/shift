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

const PaperStyledComponent = styled(Paper)(({theme}) => ({
    backgroundColor: '#CDDEFF',
}));

const SideBar = () => {

    const dispatch = useDispatch();
    const tool = useSelector(state => state.entities.tools.tool);
    const [openTooltip, setOpenTooltip] = useState(false);
    const [openActivity, setOpenActivity] = useState(false);
    const show = Object.keys(tool).length !== 0;

    const handleCloseActivity = () => {
        setOpenActivity(false);
    };

    const handleTooltipClose = () => {
        setOpenTooltip(false);
    };

    const handleTooltipOpen = () => {
        navigator.clipboard.writeText(tool.ip)
        setOpenTooltip(true);
        setTimeout(() => setOpenTooltip(false), 1000);
    };

    const handleChange = (status) => {
        setOpenActivity(true);
        dispatch(setStatus(status))
    };

    return (
        <div>
            {show &&
                <div>
                    <PaperStyledComponent>
                        <div className="wrapper--side--bar">
                            <div className="item--side--bar">
                                <b>Intel#:</b>
                                <b>ASML#:</b>
                                <b>System type:</b>
                                <b>Software:</b>
                                <b>ip:</b>
                            </div>
                            <div className="item--side--bar">
                                <span>{tool.iName} </span>
                                <span>{tool.aName}</span>
                                <span>{tool.type}</span>
                                <span>{tool.software}</span>
                                <span>
                                    {tool.ip}
                                    <ClickAwayListener onClickAway={handleTooltipClose}>
                                    <Tooltip
                                        PopperProps={{
                                            disablePortal: true,
                                        }}
                                        onClose={handleTooltipClose}
                                        open={openTooltip}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        arrow
                                        placement="top"
                                        title="Copied to clipboard"
                                    >
                                        <IconButton
                                            size="small"
                                            onClick={handleTooltipOpen}
                                            aria-label="copy"
                                        >
                                            <ContentCopyIcon fontSize="inherit"/>
                                        </IconButton>
                                    </Tooltip>
                                    </ClickAwayListener>
                                </span>
                            </div>
                        </div>
                    </PaperStyledComponent>
                    <PaperStyledComponent>
                        <div className="wrapper--side--bar">
                            <div className="item--side--bar">
                                <Button
                                    style={{
                                        backgroundColor: "rgba(23,255,0,0.4)",
                                        color: "#000",
                                        margin: "10px",
                                        border: '1px solid #000',
                                        width: '100px'
                                    }}
                                    disabled={tool.status === 'UP'}
                                    onClick={() => handleChange("UP")}
                                    variant="outlined"
                                >
                                    UP
                                </Button>
                            </div>
                            <div className="item--side--bar">
                                <Button
                                    style={{
                                        backgroundColor: "rgba(255,223,0,0.68)",
                                        color: "#000",
                                        margin: "10px",
                                        border: '1px solid #000',
                                        width: '100px'
                                    }}
                                    onClick={() => handleChange("SD")}
                                    variant="outlined"
                                >
                                    SD
                                </Button>
                            </div>
                            <div className="item--side--bar">
                                <Button
                                    style={{
                                        backgroundColor: "rgba(255,0,59,0.58)",
                                        color: "#FFF",
                                        margin: "10px",
                                        border: '1px solid #000',
                                        width: '100px'
                                    }}
                                    onClick={() => dispatch(setStatus("USD"))}
                                    variant="outlined"
                                >
                                    USD
                                </Button>
                            </div>
                            <div className="item--side--bar">
                                <Button
                                    style={{
                                        backgroundColor: "rgba(0,128,255,0.58)",
                                        color: "#FFF",
                                        margin: "10px",
                                        border: '1px solid #000',
                                        width: '100px'
                                    }}
                                    onClick={() => dispatch(setStatus("SCH"))}
                                    variant="outlined"
                                >
                                    SCH
                                </Button>
                            </div>
                        </div>
                    </PaperStyledComponent>
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
