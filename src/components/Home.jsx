import React, { useState } from "react";
import logo from "../assets/img/logo.jpeg";
import { TextField, Button } from "@mui/material";
import swal from "sweetalert";
import users from "./fakeData";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUser = (e) => {
    setEmail(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    let resultUser = false;
    let name = "";

    users.map((user) => {
      if (user.email === email && user.password === password) {
        name = user.name;
        return (resultUser = true);
      }
    });

    if (resultUser) {
      swal({
        title: `Welcome ${name}`,
        text: " Se ha iniciado sesion con exito",
        icon: "success",
        button: "Ok",
        button: navigate("/first"),
      });
    } else {
      swal({
        title: `DATOS INCORRECTOS`,
        text: " Revise usuario y/o contraseña ",
        icon: "warning",
        button: "ok",
        button: "ok",
      });
    }
  };

  return (
    <div className="home">
      <img src={logo} alt="" srcset="" />
      <h1 className="text-2xl font-bold my-4">HOME DESIGN</h1>

      <div>
        <form action="" className="login" onSubmit={handleForm}>
          <TextField
            id="outlined-basic"
            className="my-4"
            label="Email"
            variant="outlined"
            type="email"
            onChange={handleUser}
          />
          <div className="my-5">
            <TextField
              className="mt-8 w-full"
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              type="password"
              onChange={handlePw}
            />
          </div>
          <Button variant="contained" type="submit">
            Ingresar
          </Button>
        </form>
        <div className="login mt-4">
          <Button variant="outlined" type="button">
            <Link to="/signin">Registrarse</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
