import "./App.css";
import Footer from "./component/footer/Footers";
import Header from "./component/header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import routes from "./config/route";
import { useContext } from "react";
import Container from "./component/Container";

function App() {
  // const { user } = useContext(AuthContext);
  const { role } = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          {routes[role].route.map((item) => (
            <Route
              key={item.path}
              exact
              path={item.path}
              component={item.component}
            />
          ))}
          <Redirect to={routes[role].redirect} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
