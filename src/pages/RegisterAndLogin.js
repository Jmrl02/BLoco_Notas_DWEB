import React, { useState } from "react";
import { database } from "../firebase";
import {
  createUserWithEmailAndPassword as registerUser,
  signInWithEmailAndPassword as loginUser,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormControl } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterAndLogin() {
  // Estado para controlar se exibir o formulário de registro ou login
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Verifica o tipo de ação (registro ou login)
    if (type === "Registar") {
      // Cria um novo usuário com o Firebase Auth
      registerUser(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home"); // Redireciona para a página inicial após registro
        })
        .catch((err) => {
          toast.error(err.message); // Exibe a mensagem de erro usando a biblioteca react-toastify
          setLogin(true);
        });
    } else {
      // Autentica o usuário com o Firebase Auth
      loginUser(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home"); // Redireciona para a página inicial após login
        })
        .catch((err) => {
          toast.error(err.message); // Exibe a mensagem de erro usando a biblioteca react-toastify
        });
    }
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Barra de navegação entre registro e login */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              {/* Botão para exibir o formulário de registro */}
              <span
                className={login === false ? "nav-link active" : "nav-link"}
                onClick={() => setLogin(false)}
              >
                Registar
              </span>
            </li>
            <li className="nav-item">
              {/* Botão para exibir o formulário de login */}
              <span
                className={login === true ? "nav-link active" : "nav-link"}
                onClick={() => setLogin(true)}
              >
                Login
              </span>
            </li>
          </ul>
          {/* Título do formulário baseado no estado 'login' */}
          <h1 className="mt-3">{login ? "Login" : "Registar"}</h1>
          {/* Formulário para registro ou login */}
          <Form onSubmit={(e) => handleSubmit(e, login ? "Login" : "Registar")}>
            <Form.Group className="mb-3">
              {/* Campo de entrada para email */}
              <FormControl
                name="email"
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* Campo de entrada para senha */}
              <FormControl
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="mb-3">
              {/* Botão para enviar o formulário de registro ou login */}
              <Button type="submit" variant="primary">
                {login ? "Login" : "Registar"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterAndLogin;
