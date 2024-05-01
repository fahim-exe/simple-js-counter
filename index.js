const dbtn = document.getElementById("dbtn");
const rbtn = document.getElementById("rbtn");
const ibtn = document.getElementById("ibtn");
const counttLabel = document.getElementById("countlabel");
let count = 0;

ibtn.onclick = function(){
    count++;
    counttLabel.textContent=count;
}

dbtn.onclick = function(){
    count--;
    counttLabel.textContent=count;
}

rbtn.onclick = function () {
    count = 0;
    counttLabel.textContent = count;
  }