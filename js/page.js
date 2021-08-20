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

    var xhr = new XMLHttpRequest();

    xhr.onerror = function() {

      throw "Request failed. HTTP code " + xhr.status;

    };

    xhr.onload = function() {

      if (!xhr.status || (xhr.status >= 400)) {

        throw "Request failed. HTTP code " + xhr.status;

      }

      let contrastSVG =  xhr.responseText;
      let parser = new DOMParser();
      let parsed = parser.parseFromString(contrastSVG, "text/html");
      let selectedSVG = parsed.getElementById("color-blindness-filter");

      if (selectedSVG) {

        document.body.appendChild(selectedSVG)

      }

    };

    xhr.open("GET", "https://radancy.dev/a11y-smoke-test/contrast.html", true);
    xhr.send();

  }

  document.body.removeAttribute("data-color-blindness");
  document.body.setAttribute("data-color-blindness", scriptName);

} else if (scriptName === "contrast") {

  // Ajax Call

  var isContrastContainer = document.getElementById("a11y-smoke-test-contrast");

  if (isContrastContainer !== null) {

    isContrastContainer.remove();

  }

 var contrastContainer = document.createElement("div");
 contrastContainer.setAttribute("id", "a11y-smoke-test-contrast");
 document.body.appendChild(contrastContainer);

  var xhr = new XMLHttpRequest();

  xhr.onerror = function() {

    throw "Request failed. HTTP code " + xhr.status;

  };

  xhr.onload = function() {

    if (!xhr.status || (xhr.status >= 400)) {

      throw "Request failed. HTTP code " + xhr.status;

    }

    let contrastContainer = document.getElementById("a11y-smoke-test-contrast");
    let contrastForm =  xhr.responseText;
    let parser = new DOMParser();
    let parsed = parser.parseFromString(contrastForm, "text/html");
    let selectedForm = parsed.getElementById(scriptFragment);

    if (selectedForm) {

      contrastContainer.appendChild(selectedForm)

      // Create and append form close button.

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
