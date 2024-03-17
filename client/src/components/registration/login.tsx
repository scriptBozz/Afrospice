import { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { getUserLoginData } from "../redux/slices/users";

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
    </Typography>
  );
}

type User = {
  email: string;
  password: string;
};

const user: User = {
  email: "",
  password: "",
};

export default function Login() {
  const [userInfo, setUserInfo] = useState<User>(user);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // function onClickHandler() {
  //   const endpoint = "http://localhost:7000/user/login";
  //   axios
  //     .post(endpoint, userInfo)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         dispatch(getUserLoginData(res.data.userData));
  //         localStorage.setItem("userToken", res.data.token);
  //         localStorage.setItem("_id", res.data.userData._id);
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 404) {
  //         alert("Account not found. Please register, before login in.");
  //         navigate("/register");
  //         return;
  //       }
  //     });
  //   setUserInfo(user);
  // }

  return (
    <Container component="main" maxWidth="xs" sx={{ p: "3rem 0" }}>
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
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={userInfo.email}
            onChange={(event) =>
              setUserInfo({ ...userInfo, email: event.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userInfo.password}
            onChange={(event) =>
              setUserInfo({ ...userInfo, password: event.target.value })
            }
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "rgba(39, 87, 207, 0.931)" }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to={"/register"}>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography component="h3" variant="h5" sx={{ p: "2rem" }}>
          or
        </Typography>
        {/* <GoogleLogIn /> */}
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
