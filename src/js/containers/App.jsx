import React from 'react';
import {bool, func} from 'prop-types';

import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route, Switch, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import Add from './Add';

const App = ({isDreaming, changeButton}) => {

  const removeButton = () => changeButton(true);

  const showButton = () => changeButton(false);


  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <header className='header'>
        <Link className='header-home' to='/' onClick={showButton}>home</Link>
        {/* <div className='header-title'>Toekomstmuziek</div> */}
        {isDreaming ? `` : <Link className='header-create' to={`/Add`} onClick={removeButton}> Creëer jouw toekomst </Link>}
      </header>

      <section>
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
