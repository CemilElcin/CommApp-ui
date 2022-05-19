import React from "react";
import { Outlet } from "react-router-dom";
import Auth from "../../Services/Auth/Auth";

import "./navbar.css";

const Navbar = () => {

  let auth=new Auth();
  async function handleLogOut(){
    await auth.logOut();
    window.location.href = "/";
  }
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">CommApp</span>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="btn btn-outline-light border-0"
                aria-current="page"
                href="/home"
              >
                <i class="fa-solid fa-house"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-danger border-0"
                href="/home/communities"
              >
                <i class="fa-solid fa-users"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-danger border-0" href="/home/messages">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <button class="btn btn-outline-light border-0">
                <i class="fa-solid fa-bell"></i>
              </button>
              <button class="btn btn-outline-light border-0">
                <i class="fa-solid fa-envelope"></i>
              </button>
              <button class="btn btn-outline-light border-0" onClick={handleLogOut}>
                <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row m-0 sidebar">
        <div className="col-2 bg-dark">
          <ul class="list-group">
            <li
              class="text-white border-0 list-group-item bg-dark"
              aria-current="true"
            >
              <a
                href="/home/profiles"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-user text-danger"></i> Profil
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/home/communities"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-users text-danger"></i> Topluluklar
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/home/notices"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-triangle-exclamation text-danger"></i>{" "}
                Duyurular
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/home/messages"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-message text-danger"></i> Mesajlar
              </a>
            </li>
          </ul>
          <hr className="text-light" />
          <span class="navbar-brand text-light mb-0 h1">CommBulut</span>
          <ul class="list-group">
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/cloud/private"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-cloud text-danger"></i> Kişisel Bulutum
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/cloud/public"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-circle-nodes text-danger"></i> Açık
                Bulutlar
              </a>
            </li>
          </ul>
          <hr className="text-light" />
          <span class="navbar-brand text-light mb-0 h1">CommAyarlar</span>
          <ul class="list-group">
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="/settings" className="btn btn-outline-light border-0">
                <i class="fa-solid fa-gears text-danger"></i> Genel Ayarlar
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/settings/profile"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-user-gear text-danger"></i> Profil
                Ayarları
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/settings/communities"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-users-gear text-danger"></i> Topluluk
                Ayarları
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a
                href="/settings/cloud"
                className="btn btn-outline-light border-0"
              >
                <i class="fa-solid fa-cloud-meatball text-danger"></i> Bulut
                Ayarları
              </a>
            </li>
          </ul>
          <hr className="text-light" />
          <div class="list-group">
            <a
              href="/premium"
              class="list-group-item list-group-item-action bg-danger"
              aria-current="true"
            >
              <p class="mb-1">
                <i class="fa-solid fa-star text-warning"></i> Premium Hesap
              </p>
              <small>Son geçerlilik Mayıs 15, 2022</small>
            </a>
          </div>
          <hr className="text-light" />
        </div>
        <div className="col-8">
          <div className="container text-white m-5">
            <Outlet />
          </div>
        </div>
        <div className="col-2 bg-dark">
          <span class="navbar-brand text-light mb-0 h4">Mesajlar</span>
          <ul class="list-group">
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light w-100">
                <img
                  src="https://picsum.photos/id/237/300/300"
                  className="rounded-circle feed-profile-img"
                  alt=""
                />
                <span className="px-2">Kadir Umut Şanel</span>
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light w-100">
                <img
                  src="https://picsum.photos/id/237/300/300"
                  className="rounded-circle feed-profile-img"
                  alt=""
                />
                <span className="px-2">Akif Durdu</span>
              </a>
            </li>
            <li class="text-white border-0 bg-dark list-group-item">
              <a href="" className="btn btn-outline-light w-100">
                <img
                  src="https://picsum.photos/id/237/300/300"
                  className="rounded-circle feed-profile-img"
                  alt=""
                />
                <span className="px-2">Cemil Elçin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
