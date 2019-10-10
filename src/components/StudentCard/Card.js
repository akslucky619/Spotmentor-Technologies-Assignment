import React from "react";

import "./Card.css";

const percentage = (a, b, c) => {
  return Math.round((a + b + c) / 3);
};

export default function Card(props) {
  const { student } = props;
  return (
    <>
      <section className="student-container">
        <div className="student-data">
          <div>
            <p className="student-name">{student.name}</p>
            <span className="student-avg">
              {percentage(
                student.marks.Maths,
                student.marks.Science,
                student.marks.English
              )}
              %
            </span>
          </div>
          <div>
            <p className="student-marks math">Math</p>
            <ProgressBar value={student.marks.Maths} />
            <span className="student-percentage align1">
              {student.marks.Maths}%
            </span>
          </div>
          <div>
            <p className="student-marks science">Science</p>
            <ProgressBar value={student.marks.Science} />

            <span className="student-percentage align2">
              {student.marks.Science}%
            </span>
          </div>
          <div>
            <p className="student-marks english">English</p>
            <ProgressBar value={student.marks.English} />

            <span className="student-percentage align3">
              {student.marks.English}%
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

const ProgressBar = props => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          style={{ width: `${props.value}%` }}
          className="progress-class"
        ></div>
      </div>
    </div>
  );
};
