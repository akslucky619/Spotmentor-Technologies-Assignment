import React from "react";

import "./Card.css";

const percentage = students => {
  let marks = students.marks;
  let subjects = Object.keys(marks);
  let subjectMarksAvg =
    subjects.reduce((sum, subject) => sum + marks[subject], 0) /
    subjects.length;
  return Math.round(subjectMarksAvg);
};

export default function Card(props) {
    const { student } = props;
    let subjects = Object.keys(student.marks);
  return (
    <>
      <section className="student-container">
        <div className="student-data">
          <div>
            <p className="student-name">{student.name}</p>
            <span className="student-avg">{percentage(student)}%</span>
          </div>
              {subjects.map(subject =>{
                  return(
            <div>
                <p className={`student-marks ${subject.toLowerCase()}`} >{subject}</p>
                <ProgressBar value={student.marks[subject]} />
                <span className="student-percentage align1">
                {student.marks[subject]}%
                </span>
            </div>
                  )
              })}
          {/* <div>
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
          </div> */}
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
