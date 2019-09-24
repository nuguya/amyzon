/*data is object array*/
const data = require("../../data/data");

function extractObject(data, arr) {
  if (typeof data == "object") {
    data.forEach(element => {
      for (let i in element) {
        if (typeof element[i] !== "object") arr.push({ [i]: element[i] });
        extractObject(element[i], arr);
      }
    });
  }
}
