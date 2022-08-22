import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { allRoutes } from './routes/allRoutes';
import { Pie } from './components/Pie/Pie';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            {
              allRoutes.filter(route => route.component).map(({ path, component: Component }, idx) => (
                <Route
                  key={idx}
                  path={path}
                  element=
                  {
                    (
                      <div className='contenido'>
                        <Component />
                      </div>
                    )
                  }
                />
              ))
            }
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
