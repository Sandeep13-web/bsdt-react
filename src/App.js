// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './component/login'
import Routes from './routes';
import axios from 'axios';

function App() {
  const [isAuth, setisAuth] = useState(false);

  const loginAuth = async (username, password) => {
    const data = { username: username, password: password }
    const response = await axios.post('https://photot-explorer.herokuapp.com/auth', data);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setisAuth(true);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setisAuth(true);
    }
  }, [])

  const logOut = () => {
    setisAuth(false);
    localStorage.removeItem("token");
  }
  return (
    <>
      <Switch>
        <Route path='/login' exact><Login authenticate={loginAuth} isAuth={isAuth} /></Route>
        <Route component={Routes}><Routes isAuth={isAuth} logOut={logOut} /></Route>
      </Switch>
    </>
  );
}

export default App;
