import React from 'react';

import MainPanel from '../MainPanel/MainPanel';
import SidePanel from '../SidePanel/SidePanel';
import "./Layout.css";

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="layout">
        <SidePanel />
        <MainPanel />
      </div>
    );
  }
}


