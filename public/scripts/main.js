const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("myModal");
const form = document.getElementById("main");
//Hiển thị modal
function showModal() {
  modal.style.display = "block";
}
//Hiển thị modal theo thời gian
function hideModal() {
  modal.style.display = "none";
  setTimeout(showModal, 20000);
}
span.onclick = hideModal;
window.onclick = function (event) {
  if (event.target == modal) {
    hideModal();
  }
};
// Hiển thị modal
showModal();
//Nếu click/onKeyboard trên form thì không hiện modal
// window.onkeydown = function(event) {
//   if (event.target == form) {
//     showModal();
//   }
//   else modal.style.display = "none";
// };
var date = new Date();
var year = date.getFullYear() < 10 ? "0" + date.getFullYear() : date.getFullYear();
var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
var realtime = year + "-" + month + "-" + day;
var endTime = realtime + " 24:00:00";

// Lấy thời gian hiện tại
var now = new Date().getTime();

// Tính thời gian còn lại
var distance = new Date(endTime).getTime() - now;
console.log("🚀 ~ distance:", distance);

// Cập nhật thời gian mỗi 1 giây
var x = setInterval(function () {
  // Lấy các phần của thời gian còn lại
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);
  //
  hours = hours < 10 ? "0" + hours : hours;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // Hiển thị thời gian đếm ngược trong một thẻ div với id="countdown"
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // Nếu thời gian đếm ngược kết thúc, hiển thị thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("list").innerHTML = "Thời gian đã kết thúc";
  }

  // Cập nhật thời gian còn lại
  distance = new Date(endTime).getTime() - new Date().getTime();
}, 1000);

// Cập nhật thời gian mỗi 1 giây
var x = setInterval(function () {
  // Lấy các phần của thời gian còn lại
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);
  //
  hours = hours < 10 ? "0" + hours : hours;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // Hiển thị thời gian đếm ngược trong một thẻ div với id="countdown"
  document.getElementById("hours2").innerHTML = hours;
  document.getElementById("minutes2").innerHTML = minutes;
  document.getElementById("seconds2").innerHTML = seconds;
  // Nếu thời gian đếm ngược kết thúc, hiển thị thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("list2").innerHTML = "Thời gian đã kết thúc";
  }

  // Cập nhật thời gian còn lại
  distance = new Date(endTime).getTime() - new Date().getTime();
}, 1000);