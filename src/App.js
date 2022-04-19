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
import FreeFireInGame from "pages/Posts/FreeFireInGame";
import FreeFireIdCode from "./pages/Posts/FreeFireIdCode";
import Pubg from "pages/Posts/Pubg";
import CallOfDuty from "./pages/Posts/CallOfDuty";
import ArenaOfValor from "./pages/Posts/ArenaOfValor";

function App() {
  ScrollToTop();
  const [admin, setAdmin] = useState(false);
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
              <Route
                exact
                path="/post/freefire-ingame"
                component={FreeFireInGame}
              />
              <Route
                exact
                path="/post/freefire-idcode"
                component={FreeFireIdCode}
              />
              <Route exact path="/post/pubg" component={Pubg} />
              <Route exact path="/post/callofduty" component={CallOfDuty} />
              <Route exact path="/post/arenaofvalor" component={ArenaOfValor} />
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
