(function () {

  const script = document.currentScript;
  const giscusOrigin = new URL(script.src).origin;
  console.log(giscusOrigin);
// let lbl= document.querySelector("#abu");
 lbl.innerHTML = giscusOrigin;
 // return giscusOrigin;
})();
