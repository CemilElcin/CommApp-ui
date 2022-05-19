import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            CommApp
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <form class="">
              <a href="/login" className="btn btn-outline-danger border-0 me-4">Giriş Yap</a>
              <a href="/register" class="btn btn-danger" type="submit">
                Kayıt Ol
              </a>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
