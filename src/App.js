import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import React, {useEffect, useState} from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async() => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then(res=>{
        if(res.status===200) return res.json();
        throw new Error("Authentication has been failed");
      }).then(resObject=>{
        setUser(resObject.user);
      }).catch(err=>{
        console.log(err);
      })
    };

    getUser();
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/" /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
