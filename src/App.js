import { Routes, BrowserRouter, Route } from "react-router-dom";
import Cloud from "./components/pages/cloud";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/Home";
import ManagedHosting from "./components/pages/Hosting/ManagedHosting";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Register from "./components/pages/register";
import Server from "./components/pages/servers";
import Domain from "./components/pages/Domain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={Login} />
        <Route exact path="/sign-up" Component={Register} />
        <Route exact path="/" Component={Home} />
        <Route exact path="/dashboard" Component={Dashboard} />
        <Route exact path="/domain" Component={Domain} />
        <Route exact path="/cloud" Component={Cloud} />
        <Route exact path="/server" Component={Server} />
        <Route exact path="/managed-hosting" Component={ManagedHosting} />
        <Route path="/not-found" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
