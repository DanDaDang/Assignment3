/*"use strict";*/

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const skills = document.querySelectorAll(".skills");
const more = document.querySelectorAll(".more");
const less = document.querySelectorAll(".less");
const job = document.querySelectorAll(".job-box");
let check = [0, 0, 0, 0, 0, 0];
function init() {
  for (let i = 0; i < skills.length; i++) {
    skills[i].classList.add("hide");
  }
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add("hide");
  }
  for (let i = 0; i < less.length; i++) {
    less[i].classList.add("hide");
  }
}
init();
function validateEmail(email) {
  return regex.test(email);
}
document.querySelector(".submit").addEventListener("click", function () {
  const email = document.querySelector(".email").value;
  if (!validateEmail(email)) {
    document.querySelector(".normal").classList.add("hide");
    document.querySelector(".error").classList.remove("hide");
  }
  if (validateEmail(email)) {
    document.querySelector(".email-submit").classList.add("hide");
    document.querySelector(".person-infos").classList.remove("hide");
  }
});
for (let j = 0; j < job.length; j++) {
  job[j].addEventListener("mouseenter", function () {
    if (!check[j]) {
      more[j].classList.remove("hide");
      job[j].classList.add("hoveron");
    }
  });
}
for (let j = 0; j < job.length; j++) {
  job[j].addEventListener("mouseleave", function () {
    if (!check[j]) {
      more[j].classList.add("hide");
      job[j].classList.remove("hoveron");
    }
  });
}
for (let j = 0; j < more.length; j++) {
  more[j].addEventListener("click", function () {
    document.querySelector(`.job-box--${j}`).classList.remove("hide");
    check[j] = 1;
    more[j].classList.add("hide");
    less[j].classList.remove("hide");
    job[j].classList.remove("hoveron");
  });
}
for (let j = 0; j < less.length; j++) {
  less[j].addEventListener("click", function () {
    document.querySelector(`.job-box--${j}`).classList.add("hide");
    check[j] = 0;
    less[j].classList.add("hide");
  });
}
