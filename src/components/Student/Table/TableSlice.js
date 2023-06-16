import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { alerts } from '../../../Utility/alerts';
import { axiosPrivate } from '../../../Utility/axios';

const initialState = {
    status: 'idle',
    courseCode:"",
    isModalOpen: false,

}

export const fetchCourse = createAsyncThunk('fetchstudent/student', async (id,{dispatch}) => {
  try{
    const response = await axiosPrivate.get(`/api/attendance/${id}`);
        alerts('success', response.data.detail);
  } catch (error) {
    // Handle error
    alerts('error', error?.response.data.detail);
  }  
});


export const courseSlice = createSlice({
    name: 'deleteNotification',
    initialState,
    reducers: {
       setCourseCode: (state, action) => {
            state.course = action.payload
        },
        setIsModalOpen: (state, action) => {
            state.isModalOpen = !state.isModalOpen;
        },
      
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCourse.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase(fetchCourse.rejected, (state, action) => {
                state.status = 'failed';
            })
    },
});
    export const {setCourseCode, setIsModalOpen} = courseSlice;

    export default courseSlice.reducer;