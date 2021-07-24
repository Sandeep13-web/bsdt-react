// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard';
import { Route, Switch } from 'react-router-dom'
import Registration from './component/registration';
import Detail from './component/detail';
import Login from './component/login'

function App() {
  return (
    <>
      <Switch>
        <Route path='/login' component={Login} exact />
        <Route path = '/' component ={Dashboard} exact />
        <Route path = '/add-student' component={Registration} exact />
        <Route path = '/student-details' component={Detail} exact />
      </Switch>
    </>
  );
}

export default App;
