import crypto from "crypto";
const initial = "ctf{cool_cat_flag_1_fou_nd}";
const final = "ctf{co_ol_catt_flag_2_fou_nd_>.<_game_over}";
const fixNonce = () => {

};
for (let i = 8; i > 0;i--) 
console.log(crypto.randomBytes(5).toString("hex"));

// image = eeecff8e68
// image name = 05c3ba05f3
// phase 2 key = a291bb10c2

/*
3c1c3f81fb -solution.css
adb54f64bf -solution.css
edf2192208 -solution.js
74180c5872 -style.css
f90740a936 -style.css
e7bcc03b0f -style.css
*/

//index.js

document.addEventListener("DOMContentLoaded", async () => {
  const btn = document.getElementById("sub");
  const form = document.getElementById("hide");
  const text = document.getElementById("text");
  const img = document.getElementById("img");
  const head = document.getElementById("head");
  const body = document.getElementById("body");
  const title = document.getElementById("title");
  const getimg = document.getElementById("getimg");

  await addNonce([btn, form, text, img, head, body, title, getimg]);
});

async function fixNonce(nonce) {
  /* use `await fixNonce(nonce)` to run this function in ur DevTool Console
   how does a devtool look like? here is an img -> */
  return await fetch("/nonce", {
    method: "POST",
    body: JSON.stringify({
      nonce,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((d) => d.json());
}

async function addNonce(elements) {
  const { nonces } = await fetch("/nonce", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((d) => d.json());

  elements.forEach((x, i) => {
    x.setAttribute("nonce", nonces[i]);
  });
}

// solution.js

function showTruth(data) {
  const vid = document.getElementById("vid");
  const video = document.getElementById("video");
  vid.style.display = "block";
  /* SOMETHING IS HERE -> edf2192208 <- HERE IS SOMETHING */
  if (!data) {
    video.style.display = "flex";
    video.src = getRandomSolution();
    video.play();
  }
}

function getRandomSolution() {
  const solution = new Array(6).map((_, i) => i ? "solution" + i + 1 + ".mp4" : "solution.mp4");
  
  return solution[Math.round(Math.random() * solution.length)];
}