import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/Layout'

import Search from './components/Search'
import List from './components/List'

render(
  <Router history ={browserHistory}>
    <Route path ='/' component ={Layout}>
      {/* <IndexRoute component ={Search}/> */}
      <Route path='/'/>
    </Route>
  </Router>,
  document.getElementById('root')
);
