//Create Function Reducer

// export var dataCurAuth = (state = {},action) => {
// 	switch (action.type){
// 		case 'SET_dataCurAuth':
//   			return action.data;
//   		default:
//   			return state;
// 	}
// }

import { constantsProps } from "./constants";

const reducers = Object.keys(constantsProps).reduce(
  (res, key) =>
    Object.assign(res, {
      [key]: function (state = constantsProps[key], action) {
        switch (action.type) {
          case "SET_" + [key]:
            return action.data;
          default:
            return state;
        }
      },
    }),
  {}
);

export default reducers;
