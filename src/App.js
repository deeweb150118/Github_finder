import React,{Component} from 'react';
import Navbar from './Component/layout/Navbar'
import Users from './Component/users/Users';
import Search from './Component/users/Search';
import axios from 'axios';  
import './App.css';

class App extends Component{
  state={
    users:[],
    loading:false
  }



searchUsers= async (text)=>{
  const res =await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETE}`)
 
  this.setState({users:res.data.items,loading:false})
}

  render(){
    return (
      <div className="App">
       <Navbar />
       <div className="container">
         <Search searchUsers={this.searchUsers}/>
       <Users  users={this.state.users} loading={this.state.loading}/>

       </div>
      
      </div>
    );
    }

}

export default App;
