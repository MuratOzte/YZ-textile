import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    isAboutSectionOpened: boolean;
}

const initialState = {
    isAboutSectionOpened: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleAboutSection: (state, action) => {
            state.isAboutSectionOpened = action.payload;
        },
    },
});

export default uiSlice;
