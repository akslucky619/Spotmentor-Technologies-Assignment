import React from "react";

import "./SidePanel.css";

import { connect } from "react-redux";
import { changeClass } from "../../actions/classroomAction";

class SidePanel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClick = classname => {
    this.props.dispatch(changeClass(classname));
  };

  compare = (str1, str2) => {
    return str1 === str2;
  };

  render() {
    const { data, displayClass } = this.props.state;
    return (
      <div className="sidePanel">
        <h1 className="class-header">School: XYZ</h1>

        <div>
          {data.map((classNumber, i) => {
            return (
              <p
                key={i}
                className={
                  classNumber.classname === displayClass
                    ? "class-names-active"
                    : "class-names"
                }
                onClick={() => this.handleClick(classNumber.classname)}
              >
                {classNumber.classname}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(SidePanel);
