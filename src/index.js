import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tarefas from './pages/tarefas';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';


const rotas = (
     <Router>
       <div>
         <Switch>
           <Route exact path ='/' component={Login}/>
           <Route path ='/tarefa' component={Tarefas}/>
         </Switch>
       </div>
       </Router>
)

ReactDOM.render(

  <React.StrictMode>
    {rotas}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
