import React ,{ useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './Components/addUser';
import UserComponent from './Components/userComponent';
import {data} from './Data/data'
import NoPage from './Components/noPage';
import UserDetails from './Components/userDetails';
import EditUser from './Components/editUser';
import Hook from './Components/hook';

function App() {

  const [user,setUser] = useState(data)

  return (
    <div className="App">
        
      <Switch>

      {/* exact path : first path when page is rendered */}
       <Route exact path="/">
         <UserComponent 
           user={user}
           setUser={setUser}/>
       </Route>

       <Route path="/add/user">
         <AddUser 
         user={user}
         setUser={setUser}/>
       </Route>

       <Route path="/user/:id">
          <UserDetails 
            user={user}/>
       </Route>

       <Route path="/student">
          <Redirect path='/' />
       </Route>

       <Route path='/edit/:id'>
         <EditUser 
         user = {user}
         setUser = {setUser}/>
       </Route>

       <Route path="/hooks">
        <Hook />
       </Route>
         {/* if no page*/}
       <Route path="**">
          <NoPage />
       </Route>

      
      </Switch>

     
       
    </div>
  );
}

export default App;


// children concept
// function NewComp(){
//   return(
//     <Base 
//     title = "Hello">
//     Hello World!!!
//     </Base>
//   )
// }

// function Base({name,title,children}){
//   return(
//       <div>
//       <div className="nav-styles">Nav Bar</div>
//       <div className={name}>{title}</div>
//       <div className = 'content'>{children}</div>
//       <footer>Contact us
//       <p> email : example@gmail.com</p>
//       <p>Phone : 9332688260</p>
//       </footer>
//       </div>
//   )
// }

// export default Base;