!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),r=null;t.addEventListener("click",(function(){t.setAttribute("disabled","true"),r=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.48847891.js.map