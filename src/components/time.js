import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import '../App.css';

function Time() {
    const [time, setTime]= useState(Date)

    const StyledDiv = styled.div`
      border: 2px solid rgba(81, 75, 75, 1.00);
      background-color: rgba(186, 239, 239, 1.00);
      border-radius: 10px;
      margin-left: 35%; 
      margin-right: 35%; 
  `
  
    useEffect(() => { //useEffect to keep updating time
        let handle = setInterval(() => {
          setTime(Date)
        }, 1000)
    
        return () => {
          clearInterval(handle);
        }
      })

    return ( 
        <StyledDiv>
            <h1 className= "h1">Date and Time</h1>
            <h3 className= "h3">{time}</h3>
        </StyledDiv>
     );
}
 
export default Time;