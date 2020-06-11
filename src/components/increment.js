import React, {useState, useMemo} from 'react';
import Child from './child'
import styled from '@emotion/styled'

const Increment = () => {
    const [i, setI] = useState(0); 

    const StyledDiv = styled.div`
      border: 2px solid rgba(81, 75, 75, 1.00);
      background-color: #39CCCC;
      border-radius: 10px;
      margin-left: 35%; 
      margin-right: 35%; 
      margin-top: 1%;
      margin-bottom: 10%;
    `
    const onClickHandle = () => {
        setI(i + 1)
      }

    const memoChild = useMemo(() => {
      return <Child></Child>
    },[i]);

    return (  
        <StyledDiv>
            <button onClick = {onClickHandle} className="button">Increment</button>
            <h3 className= "h3">{memoChild}</h3>
        </StyledDiv>
    );
}
 
export default Increment;