import { Menu, Segment, Label, Icon } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import Search from './Search'
import List from './List'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <Menu>
          <Menu.Item>
            Map
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Search />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="container">
          <List />
          {this.props.children}
        </div>
      </div>
    )
  }
}
