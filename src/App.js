import "./styles.css";
import { useEffect, useState } from "react";
import { NavBar } from "./navBar";
import { Content } from "./content";
import { SearchBar } from "./searchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Display } from "./display";
import { Form } from "./form";

function App() {
  const [search, setsearch] = useState("");

  const [content, setcontent] = useState([]);

  useEffect(() => {
    fetch("https://609e2b4933eed80017957ebb.mockapi.io/recipe", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setcontent(data));
  }, []);

  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <SearchBar setsearch={setsearch} />
            <Content
              search={search}
              content={content}
              setcontent={setcontent}
            />
          </Route>
          <Route path="/addItem">
            <Form content={content} setcontent={setcontent} />
          </Route>
          <Route path="/recipe&:id">
            <Display content={content} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
