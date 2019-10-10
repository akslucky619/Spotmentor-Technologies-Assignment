export function getData() {
  return { type: "GET_DATA" };
}
export function changeClass(classname) {
  return { type: "CHANGE_CLASS", data: classname };
}

export function calcAverage() {
  return { type: "TOGGLE_AVG" };
}

export function toggleActive() {
  return { type: "TOGGLE_ACTIVE" };
}
