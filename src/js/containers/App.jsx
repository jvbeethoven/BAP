import React from 'react';
import {bool, func} from 'prop-types';

import {inject, observer} from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import {Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Back from './Back';

const App = ({isDreaming, changeButton}) => {

  const removeButton = () => changeButton(true);

  const showButton = () => changeButton(false);


  return (
    <section className='wrapper'>

      {/* {process.env.NODE_ENV !== `production` ? <DevTools /> : null} */}

      <header className='header'>
        <Link className='header-home' to='/' onClick={showButton}> {isDreaming ? `Terug naar` : ``}  Toekomst inspiratie</Link>
        {/* <div className='header-title'>Toekomstmuziek</div> */}
        {isDreaming ? `` : <Link className='header-create' to={`/Add`} onClick={removeButton}> Creëer jouw toekomst </Link>}
      </header>

      <section className='body'>
        <Switch>
          <Route
            exact path='/'
            component={Home}
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
      {isDreaming ? `` : <footer> Copyright © 2018 Hogeschool Vives. All rights reserved. </footer>}

    </section>
  );

};

App.propTypes = {
  isDreaming: bool.isRequired,
  changeButton: func.isRequired
};

export default inject(
  ({store}) => ({
    isDreaming: store.isDreaming,
    changeButton: store.changeButton
  })
)(
  observer(App)
);
