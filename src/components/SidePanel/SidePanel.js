import React from "react";

import "./SidePanel.css";

import { connect } from "react-redux";
import { changeClass, toggleActive } from "../../actions/classroomAction";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = classname => {
    this.props.dispatch(changeClass(classname));
  };

  compare = (str1, str2) => {
    return str1 == str2;
  };

  render() {
    const { data, displayClass } = this.props.state;
    return (
      <div className="sidePanel">
        <h1 className="class-header">School: XYZ</h1>

        <div>
          {data.map(clas => {
            return (
              <p
                className={
                  clas.classname == displayClass
                    ? "class-names-active"
                    : "class-names"
                }
                onClick={() => this.handleClick(clas.classname)}
              >
                {clas.classname}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    state
  };
};

export default connect(mapStateToProps)(SidePanel);
