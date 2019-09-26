class Query {
  constructor() {}

  registCard() {
    return "INSERT INTO PRIME_CARD(title,image_url) VALUES(?,?)";
  }
  getCards() {
    return "SELECT * FROM PRIME_CARD";
  }
  registPrimeItem() {
    return "INSERT INTO PRIME_ITEM(image_url,title,head,body,tail,link,category) VALUES(?,?,?,?,?,?,?)";
  }
  getItemsInCard() {
    return "SELECT * FROM PRIME_ITEM WHERE category = ?";
  }
  getAllItems() {
    return "SELECT * FROM PRIME_ITEM";
  }
  getLoginInfo() {
    return "SELECT * FROM USERS WHERE uid = ?";
  }
}

module.exports = Query;
