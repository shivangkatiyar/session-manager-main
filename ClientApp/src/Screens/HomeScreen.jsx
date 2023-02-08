import React from 'react';
import MainGrid from "../Components/MainGrid";

function HomeScreen({sessions, setSessions}) {
  return (
    <>
    <MainGrid sessions={sessions} setSessions={setSessions}/>
    </>
  )
}

export default HomeScreen