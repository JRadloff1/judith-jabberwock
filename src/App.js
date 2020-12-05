import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import MagicEightBall from './Views/MagicEightBall';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DocumentTitle from "react-document-title";
import ToDoList from './Views/TodoList';

function App() {
  return (
    <div className="bg-gray-500 relative pb-10 min-h-screen">
      <DocumentTitle title="Judith Jabberwock" />
      <Router>
        
        <Header />
        <div className="p-3">
        <Switch>
          <Route exact  path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/magiceightball">
            <MagicEightBall />
          </Route>
          <Route path="/todolist">
            <ToDoList />
          </Route>
        </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
