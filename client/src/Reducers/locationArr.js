const UPDATE_LOCATIONARR = "UPDATE_LOCATIONARR";
const RESET_LOCATIONARR = "RESET_LOCATIONARR";

export function updateLocationArr(locationArr) {
  return {
    type: UPDATE_LOCATIONARR,
    locationArr,
  };
}

export function resetLocationArr() {
  return {
    type: RESET_LOCATIONARR,
  };
}

export const locationArr = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_LOCATIONARR":
      return action.locationArr;
    case "RESET_LOCATIONARR":
      return [];
    default:
      return state;
  }
};
