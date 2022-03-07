import React from 'react';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import StatusButton from "./StatusButton";

const PaperStyledComponent = styled(Paper)(({theme}) => ({
    backgroundColor: '#CDDEFF',
}));

const status = ['UP', 'SD', 'USD', 'SHD']

const ToolButtons = () => {

    return (
        <div>
            <PaperStyledComponent>
                <div className="wrapper--side--bar">
                    {
                        status.map((t, i) => {
                            return (
                                <div key={i} className="item--side--bar">
                                    <StatusButton key={i} status={t}/>
                                </div>
                            )
                        })
                    }
                </div>
            </PaperStyledComponent>
        </div>
    );
};

export default ToolButtons;
