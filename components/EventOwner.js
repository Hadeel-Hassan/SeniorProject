import React, {Component} from 'react';
import BottomNavEvOwner from './BottomNavEvOwner';
import BrowseEvOwner from './BrowseEvOwner'

export default class EventOwner extends Component {
  render() {
    return (
      <>
        <BrowseEvOwner />
        <BottomNavEvOwner history={this.props.history} />
      </>
    );
  }
}

