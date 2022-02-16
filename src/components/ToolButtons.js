import React, {useState} from 'react';
import {Button} from "@mui/material";
import {setStatus} from "../store/toolReducer";
import {useDispatch, useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const PaperStyledComponent = styled(Paper)(({theme}) => ({
    backgroundColor: '#CDDEFF',
}));

const ToolButtons = () => {
    const dispatch = useDispatch();
    const tool = useSelector(state => state.entities.tools.tool);

    const [openActivity, setOpenActivity] = useState(false);


    const handleChange = (status) => {
        setOpenActivity(true);
        dispatch(setStatus(status))
    };

    return (
        <div>
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
    );
};

export default ToolButtons;
