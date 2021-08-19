---
layout: null
---

/*!

  {{ site.name }} {{ site.version }} - Page (Tab) Functionality

  Contributor(s):
  Michael "Spell" Spellacy, Email: michael.spellacy@radancy.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

// Append Bookmarklet

if (scriptName === "grayscale" || scriptName === "textspace" || scriptName === "protanopia" || scriptName === "protanomaly" || scriptName === "deuteranopia" || scriptName === "deuteranomaly" || scriptName === "tritanopia" || scriptName === "tritanomaly" || scriptName === "achromatopsia" || scriptName === "achromatomaly") {

  // Color Blindness

  var colorBlindnessFilter = document.getElementById("color-blindness-filter");

  if (!document.body.contains(colorBlindnessFilter)) {

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" id="color-blindness-filter"><defs><filter id="protanopia"><feColorMatrix in="SourceGraphic" values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"/></filter><filter id="protanomaly"><feColorMatrix in="SourceGraphic" values="0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"/></filter><filter id="deuteranopia"><feColorMatrix in="SourceGraphic" values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"/></filter><filter id="deuteranomaly"><feColorMatrix in="SourceGraphic" values="0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"/></filter><filter id="tritanopia"><feColorMatrix in="SourceGraphic" values="0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0"/></filter><filter id="tritanomaly"><feColorMatrix in="SourceGraphic" values="0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"/></filter><filter id="achromatopsia"><feColorMatrix in="SourceGraphic" values="0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"/></filter><filter id="achromatomaly"><feColorMatrix in="SourceGraphic" values="0.618, 0.320, 0.062, 0, 0 0.163, 0.775, 0.062, 0, 0 0.163, 0.320, 0.516, 0, 0 0, 0, 0, 1, 0"/></filter></defs></svg>';

    document.body.insertAdjacentHTML("beforeend", svg );

  }

  document.body.removeAttribute("data-color-blindness");
  document.body.setAttribute("data-color-blindness", scriptName);

} else if (scriptName === "contrast") {

  // Ajax Call

  var isContrastContainer = document.getElementById("a11y-smoke-test-contrast");

  if (isContrastContainer === null) {

    var contrastContainer = document.createElement("div");
    contrastContainer.setAttribute("id", "a11y-smoke-test-contrast");
    document.body.appendChild(contrastContainer);

  }

  var xhr = new XMLHttpRequest();

  xhr.onerror = function() {

    throw "Request failed. HTTP code " + xhr.status;

  };

  xhr.onload = function() {

    if (!xhr.status || (xhr.status >= 400)) {

      throw "Request failed. HTTP code " + xhr.status;

    }

    var temp = document.createElement("div");

    temp.innerHTML = xhr.responseText;
    var ele = temp.querySelector("#" + scriptFragment);

    if (ele) {

      let contrastContainer = document.getElementById("a11y-smoke-test-contrast");

      contrastContainer.innerHTML = ele.outerHTML;

      let contrastButton = document.createElement("button");
      contrastButton.setAttribute("aria-label", "Close");
      contrastButton.setAttribute("id", "contrast-button");
      contrastButton.addEventListener("click", closeContrast);
      contrastContainer.appendChild(contrastButton);

      function closeContrast(){

        this.parentNode.remove();

      }

    }

  };

  xhr.open("GET", "https://radancy.dev/a11y-smoke-test/contrast.html", true);
  xhr.send();

} else {

  document.body.appendChild(document.createElement("script")).src=scriptName;

  // TODO: Chrome Extension deoug panel throwing error about iframes. Removing for now.

  /* if(scriptName == "iframes") {

    var iframes=document.getElementsByTagName("iframe");

    for(i=0;i<iframes.length;i++) {

      iframes[i].contentDocument.body.appendChild(document.createElement("script")).src=scriptName;

    }

  } */

}
