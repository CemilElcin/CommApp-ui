import React from "react";
import { useState } from "react";
import Auth from "../../../Services/Auth/Auth";
import "./login.css";

const Login = () => {

  const [userName,setUserName]=useState();
  const [password,setPassword]=useState();

  let auth=new Auth();

  async function handleLogin(){
    await auth.login(userName,password);
  }

  return (
    <>
      <div class="login-wrap">
        <div className="card p-5 bg-dark">
          <h1 class="text-center text-danger mb-4">CommApp</h1>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={e=>setUserName(e.target.value)}
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-danger w-100" onClick={handleLogin}>
            <i class="fa-solid fa-right-to-bracket"></i> Giriş Yap
          </button>
          <div className="row text-light mt-4">
            <div className="col-5">
              <hr className="bg-light" />
            </div>
            <div className="col-2 text-center text-muted p-0 m-0">Ya Da</div>
            <div className="col-5">
              <hr className="bg-light" />
            </div>
          </div>
          <center>
            <div className="row">
              <div className="col-12 mt-3">
                <a
                  href="/auth/google"
                  className="btn btn-outline-secondary border-0 fs-5 text-light"
                >
                  <i class="fa-brands fa-google-plus-square fs-3 me-2"></i>{" "}
                  Google ile Giriş Yap
                </a>
              </div>
              <div className="col-12 mt-3">
                <a href="/auth/forgetpassword" className="text-light">
                  Şifreni mi unuttun?
                </a>
              </div>
            </div>
          </center>
        </div>
        <div className="card p-4 bg-dark mt-1">
          <h6 className="text-light text-center p-0 m-0">
            Hesabın yok mu?{" "}
            <a
              href="/auth/register"
              className="text-danger text-decoration-none"
            >
              Kaydol
            </a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Login;
