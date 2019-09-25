class usingAPI {
  constructor() {}
  getAllPrimeData() {
    return new Promise((resolve, reject) => {
      fetch("http://127.0.0.1:3000/prime_allitems")
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
