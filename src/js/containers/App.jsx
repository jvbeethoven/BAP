import React from 'react';
import {object} from 'prop-types';

import {inject, observer} from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import {Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Back from './Back';
import Kinderwens from './Kinderwens';

const App = ({location}) => {

  return (
    <section className='wrapper'>

      {/* {process.env.NODE_ENV !== `production` ? <DevTools /> : null} */}

      <header className='header'>
        <Link className='header-home' to='/' > {location.pathname === `/add` ? `Terug naar` : ``}  Toekomstmuziek</Link>
        <div>
          <Link className='header-info' to={`/Kinderwens`}>Kinderwens</Link>
          {location.pathname === `/add` ? `` : <Link className='header-create' to={`/Add`}> Creëer jouw toekomst </Link>}
        </div>
      </header>

      <section className='body'>
        <Switch>
          <Route
            exact path='/'
            component={Home}
          />
          <Route
            exact path='/Kinderwens'
            component={Kinderwens}
          />
          <Route
            exact path='/Add'
            component={Add}
          />
          <Route
            exact path='/Back'
            component={Back}
          />
        </Switch>
      </section>
      {location.pathname === `/add` ? `` : <footer> Copyright © 2018 Hogeschool Vives. All rights reserved. </footer>}

    </section>
  );

};

App.propTypes = {
  location: object.isRequired
};

export default inject(`store`)(
  observer(App)
);
