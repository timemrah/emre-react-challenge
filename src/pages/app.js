import React from 'react';
import { Home, About } from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Seo } from 'utils';
import UserStore from 'store/userStore';

function App() {
  return (
    <div>
      <Seo />
      <UserStore>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </UserStore>
    </div>
  );
}

export default App;
