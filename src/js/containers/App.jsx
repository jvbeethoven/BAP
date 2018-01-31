import React from 'react';
import {string} from 'prop-types';

import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import Add from './Add';

const App = ({name}) => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <header>
      <h1>Hello, {name}</h1>
    </header>

    <section>
      <header className='header'>
        <Link className='header-link' to='/'>
          <div className='header-home'>Home</div>
        </Link>
        <div className='header-title'>Toekomstmuziek</div>
        <div className='header-button'><Link className='header-link' to={`/Add`}> + </Link></div>
      </header>
      <Switch>
        <Route
          exact path='/'
          component={Home}
        />
        {/* <Route
          exact path='/suggestions/:id'
          component={SuggestionDetail}
        /> */}
        <Route
          exact path='/Add'
          component={Add}
        />
        <Redirect to='/' />
      </Switch>
      <Route
        exact path='/'
        component={Home}
      />
    </section>

  </section>

);

App.propTypes = {
  name: string.isRequired
};

export default inject(
  ({store}) => ({
    name: store.name
  })
)(
  observer(App)
);
