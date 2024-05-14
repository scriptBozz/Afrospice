import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


import {User} from "../../types/type"

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";



function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to={"/"} color="inherit">
        MarketPlace
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// type User = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// };

const user: User = {
  _id: "",
  username:"",
  firstName: "",
  lastName: "",
  category: "",
  email: "",
  image: "",
  password: ""
};

export default function Register() {
  const [userInfo, setUserInfo] = useState<User>(user);
  const navigate = useNavigate();


  function onClickHandler() {
    const endpoint = "http://localhost:8000/users/register";
    axios
      .post(endpoint, userInfo)
      .then((res) => {
        if (res.status === 200) {
         
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.res === 500) {
          alert("Your email is already registered. Please log in.");
          navigate("/login");
        }
      });
    setUserInfo(user);
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ p: "7rem 0" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "rgba(39, 87, 207, 0.931)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={onClickHandler}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={userInfo.firstName}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, firstName: event.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                // value={userInfo.lastName}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, lastName: event.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userInfo.email}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, email: event.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={userInfo.password}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, password: event.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "rgba(39, 87, 207, 0.931)" }}
            onClick={onClickHandler}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
