import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'

const initProfile = {
    followers: null,
    publicRepos: null
  }

const Profile = () => {
    const [profile, setProfile] = useState(initProfile) //fetch data from github

    const StyledDiv = styled.div`
      border: 2px solid rgba(81, 75, 75, 1.00);
      background-color: rgb(85, 244, 162);
      border-radius: 10px;
      margin-left: 35%; 
      margin-right: 35%; 
      margin-top: 1%;
    `

    async function getProfile() {
        const response = await fetch('https://api.github.com/users/macrodrigues');
        const json = await response.json();
    
        setProfile({
          followers: json.followers,
          publicRepos: json.public_repos
        })
      }
    
    useEffect(() => { //get github profile
      getProfile();
    },[])
    

    return (  
        <StyledDiv >
            <h1 className= "h1">Fetch data from Github</h1>
            <h3 className= "h3">{`Followers: ${profile.followers}`}</h3>
            <h3 className= "h3">{`Repositories: ${profile.publicRepos}`}</h3>
        </StyledDiv >
    );
}
 
export default Profile;