import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { List, Item, Image, Label, Icon } from 'semantic-ui-react'

import MapStore from '../stores/MapStore'
import MapActions from '../actions/MapActions'

export default class CloseByList extends Component {
  constructor() {
    super();
    this.state={
      places: MapStore.getList()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    // let { loc } = this.props.params;
    // MapActions.searchLocation(loc);
    MapStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    MapStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      places: MapStore.getList()
    })
  }

  render() {
    let { places } = this.state;
    console.log('places', places)
    let Places = ''
    if (!places) {
      Places = (
        <h4>You Are in the Middle of Nowhere!</h4>
      )
    } else {
       Places = places.map( place => {
        let { icon, name , id , reference , vicinity} = place ;
        return (
          <List.Item key = {id}>
            <Image avatar src={icon} />
            <List.Content>
              <List.Header>{name}</List.Header>
              <List.Description>{vicinity}</List.Description>
            </List.Content>
          </List.Item>
        )
      })
    }

    return (
      <List relaxed animated verticalAlign='middle'>
        <h3>Places:</h3>
        {Places}
      </List>
    )

  }

}
