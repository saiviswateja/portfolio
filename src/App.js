import './App.css';
import Home from './components/Home';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Certifications from './components/Certifications';
import Participations from './components/Participations';

function App() {
  return (
    <Router>
    <div className="container">
        <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/projects">
            <Certifications/>
          </Route>
          <Route path="/participations">
            <Participations/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
