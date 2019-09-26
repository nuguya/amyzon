require("../../../stylesheets/adminpage/index/style.scss");

(function() {
  makeClock();
  setInterval(makeClock, 1000);
})();

function makeClock() {
  const pageClock = document.querySelector(".time_info");
  const date = new Date();
  const month = date.getMonth();
  const clockDate = date.getDate();
  const hours = date.getHours();
  const day = date.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  pageClock.innerHTML =
    `<p>현재시간 : ${month + 1}월 ${clockDate}일 ${week[day]}요일` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }</p>`;
}
