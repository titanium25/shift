import React from 'react';
import ToolMap from "./ToolMap";
import SideBar from "./SideBar";
import ResponsiveAppBar from "./ResponsiveAppBar";

const CleanRoom = () => {

    return (
        <div className="grid-container">
            <div className="item1">
                <ResponsiveAppBar/>
            </div>
            <div className="item2">Menu</div>
            <div className="item3">
                <ToolMap/>
            </div>
            <div className="item4">
                <SideBar/>
            </div>
            <div className="item5">Footer</div>
        </div>
    );
};

export default CleanRoom;
