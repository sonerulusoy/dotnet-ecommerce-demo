import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../model/IUser";
import requests from "../../api/requests";
import type { FieldValues } from "react-hook-form";
import { router } from "../../router/Routes";

interface AccountState {
    user: User | null;
}

const initialState : AccountState = {
    user: null
}

export const loginUser = createAsyncThunk<User, FieldValues>(
    "account/login",
    async (data, {rejectWithValue}) => {
        try {
            const user = await requests.Account.login(data);
            localStorage.setItem("user", JSON.stringify(user));
            return user;
            
        } catch (error: any) {
            return rejectWithValue({error: error.data});
        }
    }
)

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
            router.navigate("/catalog");
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user  = action.payload;
        })
    })
})

export const {logout, setUser} = accountSlice.actions;