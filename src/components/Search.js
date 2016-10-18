import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react'

import MapActions from '../actions/MapActions'

export default class Search extends Component {

  submitSearch(e) {
    e.preventDefault()
    let { input } = this.refs;
    console.log("input.value", input.value)
    MapActions.searchLocation(input.value)
  }

  render() {

    return (
      // <h3>Search</h3>
      <div>
        <form onSubmit={(e) => this.submitSearch(e)}>
          <input type="text" ref="input" placeholder="enter location" required />
          <Button default>Search</Button>
        </form>
      </div>
    )
  }
}
