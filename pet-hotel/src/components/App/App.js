import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Components
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import ManageOwner from '../ManageOwner/ManageOwner';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/manage">
            <ManageOwner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
