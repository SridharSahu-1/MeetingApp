import React, { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [roomID, setRoomID] = useState();
  const navigate = useNavigate();
  const handleJoin = ()=>{
    navigate(`/room/${roomID}`)
  }

  return (
    <div className="App">
      <input
        placeholder="Enter Room ID"
        type="text"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}

export default Home;
