import React, {useState} from 'react';
import {ClickAwayListener, IconButton, Tooltip} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const PaperStyledComponent = styled(Paper)(({theme}) => ({
    backgroundColor: '#CDDEFF',
}))

const ToolDetails = () => {
    const tool = useSelector(state => state.entities.tools.tool);
    const [openTooltip, setOpenTooltip] = useState(false);



    const handleTooltipClose = () => {
        setOpenTooltip(false);
    };

    const handleTooltipOpen = () => {
        navigator.clipboard.writeText(tool.ip)
        setOpenTooltip(true);
        setTimeout(() => setOpenTooltip(false), 1000);
    };

    return (
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
        </div>
    );
};

export default ToolDetails;
