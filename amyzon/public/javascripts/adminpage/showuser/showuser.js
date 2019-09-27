require("../../../stylesheets/adminpage/showuser/style.scss");

(function() {
  const table = document.querySelector(".showuser_table");

  table.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      const uid = e.target.parentNode.previousSibling.previousSibling.previousSibling.textContent;
      let userType = e.target.parentNode.previousSibling;
      fetch("/admin/showuser", {
        method: "POST",
        body: JSON.stringify({ uid: uid, usertype: userType.textContent }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          return res.json();
        })
        .then(json => {
          if (json.res == "ADMIN") {
            e.target.classList.add("btn-danger");
            e.target.classList.remove("btn-primary");
            e.target.textContent = "권한삭제";
            userType.textContent = "ADMIN";
          } else {
            e.target.classList.remove("btn-danger");
            e.target.classList.add("btn-primary");
            e.target.textContent = "권한부여";
            userType.textContent = "NORMAL";
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
})();
