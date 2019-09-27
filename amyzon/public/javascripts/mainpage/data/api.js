class usingAPI {
  constructor() {}
  getAllPrimeData() {
    return new Promise((resolve, reject) => {
      fetch("/prime_allitems")
        .then(function(res) {
          return res.json();
        })
        .then(function(json) {
          if (json) resolve(json);
          reject(new Error("get items api error"));
        });
    });
  }
}
module.exports = usingAPI;
