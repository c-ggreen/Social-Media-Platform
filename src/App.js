import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ExplorePage from "./Components/ExplorePage";
import Feed from "./Components/Feed";
import UserProfile from "./Components/UserProfile";
import PoliticianProfile from "./Components/PoliticianProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/feed" component={Feed} />
          <Route path="/user" component={UserProfile} />
          <Route path="/politician" component={PoliticianProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
