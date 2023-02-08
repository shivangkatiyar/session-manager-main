import React, {useState} from "react";
import Header from "./Components/Header";
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import initial_session from "./Components/mock-session.json";

function App() {
  const [sessions, setSessions] = useState(initial_session)
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen sessions={sessions} setSessions={setSessions}/>} ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
