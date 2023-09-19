import React, { useState } from "react";
import logo from "../assets/img/logo.jpeg";
import { TextField, Button } from "@mui/material";
import swal from "sweetalert";
import users from "./fakeData";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleName = (e) => {
    setNameUser(e.target.value);
  };
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
      if (user.email === email) {
        name = user.name;
        return (resultUser = true);
      }
    });

    if (!resultUser) {
      swal({
        title: `Welcome ${nameUser}`,
        text: " Se ha registrado con exito",
        icon: "success",
        button: navegacion(),
      });
    } else {
      swal({
        title: `Correo electronico en uso`,
        text: " Utilice otra cuenta ",
        icon: "error",
        button: "Ok",
      });
    }
    users.push({
      name: nameUser,
      email: email,
      password: password,
    });
  };

  const navegacion = () => {
    navigate("/");
  };

  return (
    <div className="home">
      <img src={logo} alt="" srcset="" />

      <h1 className="text-2xl font-bold my-4">HOME DESIGN</h1>
      <p className="text-2xl font-bold my-4">Formulario de registro</p>

      <div>
        <form action="" className="login" onSubmit={handleForm}>
          <TextField
            id="outlined-1"
            className="my-5"
            label="nombre"
            variant="outlined"
            type="text"
            onChange={handleName}
          />
          <br />
          <TextField
            id="outlined-basic"
            className="my-5"
            label="Email"
            variant="outlined"
            type="email"
            onChange={handleUser}
          />

          <div className="my-5">
            <TextField
              className="mt-8 w-full"
              id="outlined-basic3"
              label="Contraseña"
              variant="outlined"
              type="password"
              onChange={handlePw}
            />
          </div>
          <Button variant="contained" type="submit">
            Registrarse
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
