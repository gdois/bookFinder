import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./components/styles";
import Book from "./pages/Book";
import Home from "./pages/Home/index.jsx";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/book/:id" component={Book} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;