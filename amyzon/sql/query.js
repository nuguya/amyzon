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
  getItemInfoById() {
    return "SELECT * FROM PRIME_ITEM WHERE id = ?";
  }
  getAllItems() {
    return "SELECT * FROM PRIME_ITEM";
  }
  getItemsInfo() {
    return "SELECT id,title,category FROM PRIME_ITEM";
  }
  getLoginInfo() {
    return "SELECT * FROM USERS WHERE uid = ?";
  }
  getAllUserInfo() {
    return "SELECT uid,username,usertype FROM USERS";
  }
  updateUsersAuth() {
    return "UPDATE USERS SET usertype = ? WHERE uid = ?";
  }
}

module.exports = Query;
