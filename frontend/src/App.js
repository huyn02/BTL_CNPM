import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/loginPage";
import Dashboard from "./pages/dashboardPage";
import NotFound from "./pages/notFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={(props) => <Login />}></Route>
        <Route path="/dashboard" component={(props) => <Dashboard />}></Route>
        <Route component={(props) => <NotFound />}></Route>
      </Switch>
    </div>
  );
}

export default App;
