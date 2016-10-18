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
    let Places, MapImg, markers = ''
    if (!places) {
      Places = '';
    } else {
      // let { lat, lng } = places[0].geometry.location;
      markers = ``

      Places = places.map( (place, i) => {
        let { icon, name , id , reference , vicinity, geometry } = place;
        let { lat, lng } = geometry.location;
        let letterIndex = String.fromCharCode(65 + i);
        console.log('letterIndex', letterIndex);
        markers += `markers=color:blue%7Clabel:${letterIndex}%7C${lat},${lng}&`
        return (
          <List.Item key={id} value={letterIndex}>
            {/* <List.Content value>{letterIndex}</List.Content> */}
            <Image avatar src={icon} />
            <List.Content>
              <List.Header>{name}</List.Header>
              <List.Description>{vicinity}</List.Description>
            </List.Content>
          </List.Item>
        )
      })
      MapImg = (
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${places[0].vicinity}&zoom=13&size=600x300&maptype=roadmap&${markers}key=${process.env.API_KEY}`} alt={places[0].vicinity}/>
      )
    }

    return (
      <List relaxed animated ordered verticalAlign='middle'>
        <h3>Places:</h3>
        {MapImg}
        {Places}
      </List>
    )

  }

}
