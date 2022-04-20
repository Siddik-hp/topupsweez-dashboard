import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Orders from "pages/Orders";
import Footer from "components/Footer";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import AdminLogin from "./pages/AdminLogin";
import ScrollToTop from "hooks/ScrollTotop";
import FreeFireIdCode from "pages/Posts/FreeFireIdCode/FreeFireIdCode";
import Pubg from "pages/Posts/Pubg/Pubg";
import CallOfDuty from "pages/Posts/CallOfDuty/CallOfDuty";
import ArenaOfValor from "pages/Posts/ArenaOfValor/ArenaOfValor";
import FreeFireInGame from "pages/Posts/FreeFireInGame/FreeFireInGame";
import PubgList from "pages/Posts/Pubg/PubgList";
import CallofdutyList from "./pages/Posts/CallOfDuty/CallofdutyList";
import ArenaList from "pages/Posts/ArenaOfValor/ArenaList";
import FreefireidList from "pages/Posts/FreeFireIdCode/FreefireidList";
import FreeFireInList from "pages/Posts/FreeFireInGame/FreeFireInList";

function App() {
  ScrollToTop();
  const [admin, setAdmin] = useState(true);
  return (
    <>
      {admin ? (
        <>
          <Sidebar setAdmin={setAdmin} />
          <div className="md:ml-64">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/profile" component={Settings} />
              <Route exact path="/orders" component={Orders} />
              {/* Free fire in game */}
              <Route
                exact
                path="/post/freefire-ingame"
                component={FreeFireInGame}
              />
              <Route
                exact
                path="/post/freefire-ingame/lists"
                component={FreeFireInList}
              />
              {/* free fire id code */}
              <Route
                exact
                path="/post/freefire-idcode"
                component={FreeFireIdCode}
              />
              <Route
                exact
                path="/post/freefire-idcode/lists"
                component={FreefireidList}
              />
              {/* Pubg */}
              <Route exact path="/post/pubg" component={Pubg} />
              <Route exact path={"/post/pubg/lists"} component={PubgList} />
              {/* Call of duty */}
              <Route exact path="/post/callofduty" component={CallOfDuty} />
              <Route
                exact
                path="/post/callofduty/lists"
                component={CallofdutyList}
              />
              {/* Arena of valor */}
              <Route exact path="/post/arenaofvalor" component={ArenaOfValor} />
              <Route
                exact
                path="/post/arenaofvalor/lists"
                component={ArenaList}
              />
              <Redirect from="*" to="/" />
            </Switch>
            <Footer />
          </div>
        </>
      ) : (
        <Switch>
          <Route exact path={"/"}>
            <AdminLogin setAdmin={setAdmin} />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      )}
    </>
  );
}

export default App;
