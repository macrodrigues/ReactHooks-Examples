import React from 'react';
import './App.css';
import styled from '@emotion/styled'
import Time from './components/time'
import Location from './components/location'
import Profile from './components/profile'
import Increment from './components/increment'

function App() {

  const StyledDiv = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  `

  return (
    <StyledDiv>
        <h2 className="h2">Practicing React Hooks</h2>
        <Time/>
        <Profile/>
        <Location/>
        <Increment/>
    </StyledDiv>
    
  );
}

export default App;
