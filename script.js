let x = document.getElementById("password");
let eyesopen = document.getElementById("eyesopen");
eyesopen.onclick = function () {
  if (x.type == "password") {
    x.type = "text";
    eyesopen.src = "img/openeyes.svg";
  } else {
    x.type = "password";
    eyesopen.src = "img/invisible 1.svg";
  }
};
