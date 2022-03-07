import React from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setStatus} from "../../store/toolReducer";

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

    const handleChange = (status) => {
        // setOpenActivity(true);
        dispatch(setStatus(status))
    };
    return (
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
    );
};

export default StatusButton;
