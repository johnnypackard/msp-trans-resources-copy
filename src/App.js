import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './styles/App.css';

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import HomepageHeading from './components/Homepage/Homepage';
import ResourcesPage from './components/ResourcesPage/ResourcesPage';
import HousingPage from './components/HousingPage/HousingPage';
import CommunityPage from './components/CommunityPage/CommunityPage';
import EducationPage from './components/EducationPage/EducationPage';
import FinancialPage from './components/FinancialPage/FinancialPage';
import HealthcarePage from './components/HealthcarePage/HealthcarePage';
import LegalPage from './components/LegalPage/LegalPage';
import VolunteerPage from './components/VolunteerPage/VolunteerPage';
// import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => (
    <div>
      <Router>
        <div>
            <Switch>
                <Redirect exact from="/" to="/homepage" />
                <Route
                  path="/login"
                  component={LoginPage}
                />
                <Route
                  path="/register"
                  component={RegisterPage}
                />
                <Route
                  path="/home"
                  component={UserPage}
                />
                <Route
                  path="/info"
                  component={InfoPage}
                />
                <Route
                  path="/homepage"
                  component={HomepageHeading}
                />
                <Route
                  path="/resources"
                  component={ResourcesPage}
                />
                <Route
                  path="/housing"
                  component={HousingPage}
                />
                 <Route
                  path="/community"
                  component={CommunityPage}
                />
                 <Route
                  path="/education"
                  component={EducationPage}
                />
                 <Route
                  path="/financial"
                  component={FinancialPage}
                />
                 <Route
                  path="/healthcare"
                  component={HealthcarePage}
                />
                 <Route
                  path="/legal"
                  component={LegalPage}
                />
                <Route
                  path="/volunteer"
                  component={VolunteerPage}
                />
                {/* <Route
                  path="/profile"
                  component={ProfilePage}
                /> */}
                {/* OTHERWISE (no path!) */}
                <Route render={() => <h1>404</h1>} />
            </Switch>  
        </div>
      </Router>
    </div>

);

export default App;
