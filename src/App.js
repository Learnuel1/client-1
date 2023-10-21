import logo from './logo.svg';
import './App.css';
import {io} from "socket.io-client";
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [location, setLocation] = useState("");
  const socket = io("https://smartmuvas.onrender.com");
  const user ={userId: "87hjfgr453228", receiver: "12sf7834uioioi53424"};
  socket.emit("lock", user);

  socket.on("notify", payload =>{
    setLocation(payload)
    console.log(payload);
  })
  
  const sendLocation = () => {
    user.location = "abj";
    console.log(user)
  socket.emit("location", user);
  }

  return (
    <>
        <button className="btn"  onClick ={(e) =>sendLocation()}>
              send location2
        </button>
    </>
  );
  }

export default App;
