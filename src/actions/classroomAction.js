export function changeClass(classname) {
  return { type: "CHANGE_CLASS", data: classname };
}

export function toggleActive() {
  return { type: "TOGGLE_ACTIVE" };
}
