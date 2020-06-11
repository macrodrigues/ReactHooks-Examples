import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

const initXY = {
    x:null,
    y:null
  }

const Location = () => {
    const [xy, setXY] = useState(initXY); //location useState

    const StyledDiv = styled.div`
      border: 2px solid rgba(81, 75, 75, 1.00);
      background-color: rgb(234, 121, 16);
      border-radius: 10px;
      margin-left: 38%; 
      margin-right: 38%; 
      margin-top: 1%;
`

    const mouseMoveHandle =  (event) => {
        setXY( {
          x: event.clientX,
          y: event.clientY
        })
    }

    useEffect(() => { //useEffect to locate mouse pointer
        window.addEventListener("mousemove", mouseMoveHandle)
      },[])

    return (  
        <StyledDiv>
            <h1 className= "h1">Pointer Location</h1>
            <h3 className= "h3">{`x:${xy.x}, y:${xy.y}`}</h3>
        </StyledDiv>
    );
}
 
export default Location;