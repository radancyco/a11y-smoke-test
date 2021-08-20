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

      let svgNS = "http://www.w3.org/2000/svg";

      let colorBlindSVG = document.createElementNS(svgNS, "svg")
      colorBlindSVG.setAttribute("id", "color-blindness-filter");

      let colorBlindDef = document.createElementNS(svgNS, "defs");

      let colorBlindFilter1 = document.createElementNS(svgNS, "filter");
      colorBlindFilter1.setAttribute("id", "protanopia");
      let colorBlindMatrix1 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix1.setAttribute("in", "SourceGraphic");
      colorBlindMatrix1.setAttribute("values", "0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter1.appendChild(colorBlindMatrix1);
      colorBlindDef.appendChild(colorBlindFilter1);

      let colorBlindFilter2 = document.createElementNS(svgNS, "filter");
      colorBlindFilter2.setAttribute("id", "protanomaly");
      let colorBlindMatrix2 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix2.setAttribute("in", "SourceGraphic");
      colorBlindMatrix2.setAttribute("values", "0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter2.appendChild(colorBlindMatrix2);
      colorBlindDef.appendChild(colorBlindFilter2);

      let colorBlindFilter3 = document.createElementNS(svgNS, "filter");
      colorBlindFilter3.setAttribute("id", "deuteranopia");
      let colorBlindMatrix3 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix3.setAttribute("in", "SourceGraphic");
      colorBlindMatrix3.setAttribute("values", "0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter3.appendChild(colorBlindMatrix3);
      colorBlindDef.appendChild(colorBlindFilter3);

      let colorBlindFilter4 = document.createElementNS(svgNS, "filter");
      colorBlindFilter4.setAttribute("id", "deuteranomaly")
      let colorBlindMatrix4 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix4.setAttribute("in", "SourceGraphic");
      colorBlindMatrix4.setAttribute("values", "0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter4.appendChild(colorBlindMatrix4);
      colorBlindDef.appendChild(colorBlindFilter4);

      let colorBlindFilter5 = document.createElementNS(svgNS, "filter");
      colorBlindFilter5.setAttribute("id", "tritanopia")
      let colorBlindMatrix5 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix5.setAttribute("in", "SourceGraphic");
      colorBlindMatrix5.setAttribute("values", "0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter5.appendChild(colorBlindMatrix5);
      colorBlindDef.appendChild(colorBlindFilter5);

      let colorBlindFilter6 = document.createElementNS(svgNS, "filter");
      colorBlindFilter6.setAttribute("id", "tritanomaly")
      let colorBlindMatrix6 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix6.setAttribute("in", "SourceGraphic");
      colorBlindMatrix6.setAttribute("values", "0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter6.appendChild(colorBlindMatrix6);
      colorBlindDef.appendChild(colorBlindFilter6);

      let colorBlindFilter7 = document.createElementNS(svgNS, "filter");
      colorBlindFilter7.setAttribute("id", "achromatopsia")
      let colorBlindMatrix7 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix7.setAttribute("in", "SourceGraphic");
      colorBlindMatrix7.setAttribute("values", "0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter7.appendChild(colorBlindMatrix7);
      colorBlindDef.appendChild(colorBlindFilter7);

      let colorBlindFilter8 = document.createElementNS(svgNS, "filter");
      colorBlindFilter8.setAttribute("id", "achromatomaly")
      let colorBlindMatrix8 = document.createElementNS(svgNS, "feColorMatrix");
      colorBlindMatrix8.setAttribute("in", "SourceGraphic");
      colorBlindMatrix8.setAttribute("values", "0.618, 0.320, 0.062, 0, 0 0.163, 0.775, 0.062, 0, 0 0.163, 0.320, 0.516, 0, 0 0, 0, 0, 1, 0");
      colorBlindFilter8.appendChild(colorBlindMatrix8);
      colorBlindDef.appendChild(colorBlindFilter8);

      colorBlindSVG.appendChild(colorBlindDef);

      document.body.appendChild(colorBlindSVG);

    }

  document.body.removeAttribute("data-color-blindness");
  document.body.setAttribute("data-color-blindness", scriptName);

} else if (scriptName === "contrast") {

  // Ajax Call

  var isContrastContainer = document.getElementById("a11y-smoke-test-contrast");

  if (isContrastContainer !== null) {

    document.getElementById("a11y-smoke-test-contrast").remove();

  }

  let contrastContainer = document.createElement("div");
  contrastContainer.setAttribute("id", "a11y-smoke-test-contrast");
  document.body.appendChild(contrastContainer);

  if (scriptFragment == "color-contrast") {

    var contrastForm = '<form action="https://webaim.org/resources/contrastchecker/" id="color-contrast" target="_blank"> <fieldset> <legend>Check Color Contrast</legend> <p>Use this form to validate the contrast of two specific colors combinations.</p><div class="form-fields"> <div> <label for="fcolor-2">Foreground:</label> <input id="fcolor-2" name="fcolor" type="color" value="#0000FF"> </div><div> <label for="bcolor-2">Background:</label> <input id="bcolor-2" name="bcolor" type="color" value="#FFFFFF"> </div><div> <button class="btn">Check</button> </div></div></fieldset></form>';

  } else if(scriptFragment == "link-contrast") {

    var contrastForm = '<form action="https://webaim.org/resources/linkcontrastchecker/" id="link-contrast" target="_blank"> <fieldset> <legend>Check Link & Text Contrast</legend> <p>Use this form to validate specific color combinations.</p><div class="form-fields"> <div> <label for="lcolor-1">Link:</label> <input id="lcolor-1" name="lcolor" type="color" value="#3333FF"> </div><div> <label for="fcolor-1">Body Text:</label> <input id="fcolor-1" name="fcolor" type="color" value="#000000"> </div><div> <label for="bcolor-1">Background:</label> <input id="bcolor-1" name="bcolor" type="color" value="#FFFFFF"> </div><div> <button class="btn">Check</button> </div></div></fieldset></form>';

  }

  let parser = new DOMParser();
  let parsed = parser.parseFromString(contrastForm, "text/html");
  let selectedForm = parsed.getElementById(scriptFragment);

  contrastContainer.appendChild(selectedForm);

  // Create and append form close button.

  let contrastButton = document.createElement("button");
  contrastButton.setAttribute("aria-label", "Close");
  contrastButton.setAttribute("id", "contrast-button");
  contrastButton.addEventListener("click", closeContrast);
  contrastContainer.appendChild(contrastButton);

  function closeContrast(){

    this.parentNode.remove();

  }

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
