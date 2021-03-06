import React from "react";
import { connect } from "react-redux";

import Card from "../StudentCard/Card";

import "./MainPanel.css";
import { toggleActive } from "../../actions/classroomAction";

class MainPanel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handlePercent = () => {
    this.props.dispatch(toggleActive());
  };

  calcAvrage = objectToDisplay => {
    return Math.round(
      objectToDisplay.students.reduce((acc, student) => {
        acc +=
          (student.marks.Maths +
            student.marks.Science +
            student.marks.English) /
          3;
        return acc;
      }, 0) / objectToDisplay.students.length
    );
  };

  render() {
    const { data, displayClass } = this.props.state;

    let objectToDisplay = data.filter(obj => {
      return obj.classname === displayClass;
    })[0];

    return (
      <div className="mainPanel">
        <>
          {objectToDisplay ? (
            <>
              <div className="student-header">
                <h1>{objectToDisplay.classname}</h1>
                <p>{objectToDisplay.students.length} Students</p>
                {displayClass && this.props.state.isActive === true ? (
                  <button onClick={this.handlePercent} className="btn-active">
                    Hide Average
                  </button>
                ) : (
                  <button onClick={this.handlePercent} className="btn">
                    Show Average
                  </button>
                )}
                {this.props.state.isActive === true ? (
                  <div className="total-percentage">
                    <p className>
                      Classroom Average Percentage{" "}
                      {this.calcAvrage(objectToDisplay)}%
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="student-container-wrapper">
                {objectToDisplay &&
                  objectToDisplay.students.map((obj, i) => {
                    return <Card key={i} student={obj} />;
                  })}
              </div>
            </>
          ) : (
            <h1 className="no-student">Select a Class</h1>
          )}
        </>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(MainPanel);
