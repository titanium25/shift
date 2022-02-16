import React, {useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import '../assets/toolMap.css';
import {useDispatch, useSelector} from "react-redux";
import {viewTool} from '../store/toolReducer';
import {useAuth} from "../context/AuthContext";

const CleanRoom = styled(Paper)(({theme}) => ({
    backgroundColor: '#CDDEFF',

}));

const ReticleRoom = styled(Paper)(({theme}) => ({
    backgroundColor: '#9eafd3',
    height: '100%',
    borderRadius: 10,
    borderColor: '#000',
    border: '1px solid',
}))


const ToolMap = () => {
    const dispatch = useDispatch();
    const tools = useSelector(state => state.entities.tools.fleet);
    const active = useSelector(state => state.entities.tools.tool);
    const handleClick = (tool) =>
        active.aName === tool.aName
            ? dispatch(viewTool({}))
            : dispatch(viewTool(tool));
    return (
        <div>
            <CleanRoom>
                <div className="wrapper--tool--map">
                    {
                        tools.map((tool, index) => {
                            return (
                                <div className="tool--slot" key={index}>
                                    {
                                        tool.slot &&
                                        <Button
                                            sx={{
                                                backgroundColor: tool.status === "UP" ? "rgba(23,255,0,0.4)"
                                                    : tool.status === "USD" ? "rgba(255,0,59,0.58)"
                                                        : tool.status === "SD" ? "rgba(255,223,0,0.68)"
                                                            : "rgba(0,128,255,0.58)",
                                                color: tool.status === "UP" || tool.status === "SD" ? "#000" : "#FFF",
                                                padding: "14px 18px",
                                                fontWeight: tool.aName === active.aName ? 'bold' : 'normal',
                                                fontSize: "15px",
                                                border: tool.aName === active.aName ? '2px solid #000' : '1px solid #000',
                                                borderColor: "rgba(0,0,0,0.93)",
                                                boxShadow: tool.aName === active.aName ? '0px 8px 20px rgba(0, 0, 0, 0.55)'
                                                    : '0px 8px 15px rgba(0, 0, 0, 0.3)',
                                                transition: 'all 0 ease-out 2s',
                                                margin: '2px',
                                                '&:hover': {
                                                    backgroundColor: tool.status === "UP" ? "rgba(23,255,0,0.4)"
                                                        : tool.status === "USD" ? "rgba(255,0,59,0.58)"
                                                            : tool.status === "SD" ? "rgba(255,223,0,0.68)"
                                                                : "rgba(0,128,255,0.58)",
                                                    color: tool.status === "UP" || tool.status === "SD" ? "#000" : "#FFF",
                                                    padding: "14px 18px",
                                                    fontWeight:  'bold',
                                                    fontSize: "15px",
                                                    border: tool.aName === active.aName ? '2px solid #000' : '1px solid #000',
                                                    borderColor: "rgba(0,0,0,0.93)",
                                                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.55)',
                                                },
                                            }}
                                            onClick={() => handleClick(tool)}
                                            variant="outlined"
                                        >
                                            {tool.iName}
                                        </Button>
                                    }
                                </div>
                            )
                        })
                    }
                    <div className="reticle--room">

                        <ReticleRoom elevation={6}>
                            <p>Reticle Room</p>
                        </ReticleRoom>
                    </div>
                </div>
            </CleanRoom>
        </div>
    );
};

export default ToolMap;
