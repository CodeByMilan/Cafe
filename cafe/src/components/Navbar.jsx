import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-black top-0 fixed w-screen z-20 text-2xl text-center">
        <div className="max-w-screen flex mt-4 items-center justify-between ">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="h-10 rounded-2xl ml-10"
              alt="cafe logo"
            ></img>
          </Link>
          <div className="flex justify-between items-center p-5 mb-2 gap-20 text-white text-2xl sm:text-2xl ">
            <ul className="flex gap-10 mx-4 ">
              <li className="hover:scale-105   hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:scale-105   hover:text-blue-600">
                <Link to="/">Menu </Link>
              </li>
              <li className="hover:scale-105   hover:text-blue-600">
                <Link to="/">Contact </Link>
              </li>
            </ul>
            <ul className="flex gap-5 mr-3 pr-3 ">
              <li className="hover:scale-105   hover:text-blue-600">
                <Link to="/">Location </Link>
              </li>
              <Link to="/reservation">
                <button
                  type="button"
                  className="font-medium text-orange-400 rounded-lg text-center hover:scale-105   hover:text-blue-600"
                >
                  Reservation
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
