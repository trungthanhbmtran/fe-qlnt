//Created Function Action
// export function set_dataCurAuth(data) {
//     return {
//         type: "SET_dataCurAuth",
//         data
//     }
// }

import { constantsProps } from "./constants";

const actions = Object.keys(constantsProps).reduce(
  (res, key) =>
    Object.assign(res, {
      ["set_" + key]: function (data) {
        return {
          type: "SET_" + key,
          data,
        };
      },
    }),
  {}
);

export default actions;