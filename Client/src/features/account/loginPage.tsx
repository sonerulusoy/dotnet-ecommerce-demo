import { Avatar, Box, Container, Paper, TextField, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useForm, type FieldValues } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "./accountSlice";
import { useNavigate } from "react-router";
// import { useState } from "react";
// import requests from "../../api/requests";

export default function LoginPage() {
    // const [username, SetUsername] = useState("");
    // const [password, SetPassword] = useState("");

    // const [values, setValues] = useState({
    //     username: "",
    //     password: ""
    // })

    // function handleSubmit(e: any) {
    //     e.preventDefault();
    //     // Here you would typically handle the login logic, such as calling an API
    //     console.log(values);
    //     requests.Account.login(values   )
    // }

    // function handleInputChange(e: any) {
    //     const { name, value } = e.target;
    //     setValues({
    //         ...values, // {username: "abc", password: "123"}
    //         [name]: value
    //     });
    // }
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm(
        {
            defaultValues: {
                username: "",
                password: "",
            }
        }
    );

    async function submitForm(data: FieldValues) {
        // await requests.Account.login(data);
        await dispatch(loginUser(data));
        navigate("/catalog");
    }

    console.log(errors);
    return (
        <Container maxWidth="xs">
            <Paper sx={{ marginTop: 8, padding: 2 }} elevation={3}>
                <Avatar sx={{ mx: "auto", color: "secondary.main", mb: 1, textAlign: "center" }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 2 }}>
                    <TextField
                        {...register("username", { required: "username is required" })}
                        label="Enter username"
                        fullWidth required autoFocus
                        sx={{ mb: 2 }}
                        size="small"
                        error={!!errors.username}
                        helperText={errors.username?.message}>
                    </TextField>
                    <TextField
                        {...register("password", {
                            required: "password is required", minLength: {
                                value: 6,
                                message: "Min length is 6 characters"
                            }
                        })}
                        label="Enter password"
                        type="password"
                        fullWidth required
                        sx={{ mb: 2 }}
                        size="small"
                        error={!!errors.password}
                        helperText={errors.password?.message}>
                    </TextField>
                    <LoadingButton 
                    loading={isSubmitting} 
                    disabled={!isValid}
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    sx={{ mt: 1 }}
                    >Login
                    </LoadingButton>
                </Box>
            </Paper>
        </Container>
    )
}