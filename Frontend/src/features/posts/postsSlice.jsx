import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get('http://localhost:3000/api/posts/');
    // console.log('hello', response.data);
    return await response.data;
  });

export const fetchPostById = createAsyncThunk("posts/fetchPostById", async (id) =>{
    const response = await axios.get(`http://localhost:3000/api/posts/:id`);
    console.log(state.posts);
    return await response.data;
})



const initialState = {
    posts: [],
    loading: false,
    error: null,
    post: null,
};




const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        // Fetch one post
        .addCase(fetchPostById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPostById.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.post = action.payload;
            console.log('Fetched Post:', action.payload);
        })
        .addCase(fetchPostById.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
  });

  export const selectPosts = (state) => state.posts.posts;
  export const selectLoading = (state) => state.posts.loading;
  export const selectError = (state) => state.posts.error;

export default postsSlice.reducer;