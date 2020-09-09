import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '50ch',
      height:'10ch',
      marginLeft:'65ch'
    },
  },
  root1: {
    margin: theme.spacing(1),
    width: '50ch',
    background:'#85C1E9',
    marginLeft:'65ch',
    
  },
  root2:{
    fontSize:'20px',
    fontWeight:'bold',
    fontFamily:'cursive',
    color:'#34495E',
  }
}));
 
function App() {
  const classes = useStyles();
  const [ posts, setPosts ] = useState([]);
  const [ state, setState ] = useState('');
  
  
   const handleSubmit = async (event) => {
    event.preventDefault();
    const resp= await axios.get(`https://api.github.com/users/${state.username}`);
    setPosts(resp.data)
    setState({ username: '' });
    
      
    
    
  };
  
  
  
 
  
  
 

  return (
    
    <div className="App">
      
      <form className={classes.root} noValidate autoComplete="off" onSubmit ={handleSubmit} >
      <div>
      <TextField
          id="outlined-full-width"
          label="Username"
          name="username"
          style={{ margin:8,}}
          placeholder="Enter your Github Username"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.username}
          onChange={event => setState({ username: event.target.value })}
        />
       
       </div>
       <div>
      <Button variant="contained" color="primary" type="Submit">
      Compare
      </Button>
      </div>
      </form>
      <Card className={classes.root1}>
      <CardContent className={classes.root2}>
      
        
           <p key={posts.id}>Username:{posts.login}</p>
           <p key={posts.id}>Followers:{posts.followers}</p>
           <p key={posts.id}>Following:{posts.following}</p>
           <p key={posts.id}>Repo:{posts.public_repos}</p>
           <p key={posts.id}>Gists:{posts.public_gists}</p>
           
      
      
      </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
