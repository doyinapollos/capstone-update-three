import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/pages/home/Home';
import SignInPage from './components/pages/signIn/SignInPage';
import Register from './components/pages/register/Register';
import AdminPortal from './components/pages/admin/AdminPortal';
import Header from './components/layout/header/Header';
import ViewMoreProfiles from './components/pages/viewMoreProfiles/ViewMoreProfiles';
import SpecialistPortal from './components/pages/specialistPortal/SpecialistPortal';

function App() {
  return (
    <div className="app">
          <Router>
              <Switch>
                <Route exact path= "/"> <Home /> </Route>
                <Route exact path= "/sign-in"> <SignInPage /> </Route>
                <Route exact path= "/register"> <Register /> </Route>
                <Route exact path= "/admin"> <AdminPortal /> </Route>
                <Route exact path= "/profiles"> <ViewMoreProfiles /> </Route>
                <Route exact path= "/specialist"> <SpecialistPortal /> </Route>
              </Switch>

          </Router>
    </div>
  );
}

export default App;
