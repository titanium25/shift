import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "tools",
    initialState: {
        fleet: [],
        tool: {},
    },
    reducers: {
        initialize: (state, action) => {
            state.fleet = action.payload
        },
        viewTool: (state, action) => {
            state.tool = action.payload;
        },
        setStatus: (state, action) => {
            state.fleet
                .find(t => t.iName === state.tool.iName)
                .status = action.payload
        },
    },
});

export const {viewTool, setStatus, initialize} = slice.actions;
export default slice.reducer;
