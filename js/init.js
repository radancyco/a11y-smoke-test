---
layout: null
---

/*!

  {{ site.name }} {{ site.version }} - Extension Functionality

  Contributor(s):
  Michael "Spell" Spellacy

*/

document.addEventListener("DOMContentLoaded", () => {

  // In-page Functionality

  // Get Offset

  function getOffset(el) {

    var rect = el.getBoundingClientRect();
    return {

      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY

    };

  };

  // Scroll Button

  var disclosureButton = document.querySelectorAll(".disclosure--btn");

  disclosureButton.forEach(function(button, e){

    button.addEventListener("click", function () {

      window.scrollTo({

        top: getOffset(this).top - 8

      });

    });

  });

  // New Tab Buttons and Links

  function openNewTab() {

    let newTab = document.querySelectorAll(".new-tab");

    if(newTab) {

      newTab.forEach(function(tab, e){

        tab.setAttribute("rel", "noopener");
        tab.setAttribute("target", "_blank");

        let srOnly = document.createElement("span");

        srOnly.classList.add("sr-only");
        srOnly.textContent = "(Opens in new tab)";
        tab.appendChild(srOnly);

      });

    }

  }

  // Tab Related Stuff

  chrome.tabs.query({

    active: true, lastFocusedWindow: true}, tabs => {

    document.body.classList.add("extension-active"); // Only add this class when extension active.

    let url = tabs[0].url; // URL of active tab

    let A11yLink = document.querySelectorAll(".validate-a11y");

    if(A11yLink){

      A11yLink.forEach(function(link, e){

        let A11yHref = link.href;
        link.setAttribute("href", A11yHref + "report#/" + url);

      });

    }

    let HTMLLink = document.querySelectorAll(".validate-html");

    if(HTMLLink){

      HTMLLink.forEach(function(link, e){

        let HTMLHref = link.href;
        link.setAttribute("href", HTMLHref + "?showsource=yes&showoutline=yes&showimagereport=yes&doc=" + url);

      });

    }

    let CSSLink = document.querySelectorAll(".validate-css");

    if(CSSLink){

      CSSLink.forEach(function(link, e){

        let CSSHref = link.href;
        link.setAttribute("href", CSSHref + "validator?profile=css3&warning=0&uri=" + url);

      });

    }

    let StructuredDataLink = document.querySelectorAll(".validate-structured-data");

    if(StructuredDataLink){

      StructuredDataLink.forEach(function(link, e){

        let StructuredDataHref = link.href;
        link.setAttribute("href", StructuredDataHref + "?url=" + url);

      });

    }

    let HyperLink = document.querySelectorAll(".validate-links");

    if(HyperLink){

      HyperLink.forEach(function(link, e){

        let HyperHref = link.href;
        link.setAttribute("href", HyperHref + "?uri=" + url + "&hide_type=all&depth=&check=Check");

      });

    }

    let SpellingLink = document.querySelectorAll(".validate-spelling");

    if(SpellingLink){

      SpellingLink.forEach(function(link, e){

        let SpellingHref = link.href;
        link.setAttribute("href", SpellingHref + "?uri=" + url + "&lang=en_US");

      });

    }

    let PDFLink = document.querySelectorAll(".validate-pdf");

    if(PDFLink){

      PDFLink.forEach(function(link, e){

        let PDFHref = link.href;
        link.setAttribute("href", PDFHref + "?url=" + url);

      });

    }

    let HeadingOutlineLink = document.querySelectorAll(".validate-heading");

    if(HeadingOutlineLink){

      HeadingOutlineLink.forEach(function(link, e){

        const HeadingOutlineHref = link.href;
        link.setAttribute("href", HeadingOutlineHref + "?url=" + url);

      });

    }

    let ImageValidationLink = document.querySelectorAll(".validate-images");

    if(ImageValidationLink){

      ImageValidationLink.forEach(function(link, e){

        const ImageValidationHref = link.href;
        link.setAttribute("href", ImageValidationHref + "?url=" + url);

      });

    }

    // Validate HTML by Direct Input

    var formValidation = document.getElementById("submitPartialPage");
    var formValidationContent = document.getElementById("contentToValidate");
    var formValidationSubmit = document.getElementById("submitValidate");
    var topHtml = '<!DOCTYPE html>' + "\n" + '<html lang="en">' + "\n" + '<head>' + "\n\t" + '<meta charset="utf-8">' + "\n\t" + '<title>Untitled Document</title>' + "\n" + '</head>' + "\n" + '<body>' + "\n" + "\n";
    var bottomHtml = "\n\n</body></html>";

    formValidationSubmit.addEventListener("click", function(e) {

      e.preventDefault();

      var textareaContent = formValidationContent.value;

      var newInput = document.createElement("input");
      newInput.setAttribute("type", "hidden");
      newInput.setAttribute("id", "contentField");
      newInput.setAttribute("name", "content");
      newInput.setAttribute("value", topHtml + textareaContent + bottomHtml);
      formValidation.appendChild(newInput);

      formValidation.submit();

    }, false);

    let a11yButtons = document.querySelectorAll("button[data-script]");

    if(a11yButtons) {

      // If current URL does not match stored URL, then clear all session keys.

      let currentURL = tabs[0].url;
      let storedURL = window.localStorage.getItem("extensionURL");

      if(currentURL !== storedURL) {

        window.localStorage.clear();
        window.localStorage.setItem("extensionURL", currentURL);

      }

      a11yButtons.forEach(function(button, e){

        button.setAttribute ("id", "btn-script-" + (e + 1));
        button.addEventListener("click", () => {

          let dataScript = button.getAttribute("data-script");
          let dataFragment = button.getAttribute("data-fragment");

          button.setAttribute("disabled", true);
          window.localStorage.setItem(button.id, dataScript);

        });

      });

    }

    // Let's loop through storage and append disabled to match we find...

    Object.keys(localStorage).forEach(function(key, i){

      var dataScriptID = localStorage.key(i);

      if(dataScriptID !== "extensionURL") {

        // console.log(dataScriptID);

        document.getElementById(dataScriptID).setAttribute("disabled", true)

      }

    });

  });

  // Reset Tab

  function resetPage() {

    chrome.scripting.executeScript({

      code: "window.location.reload();"

    });

  }

  let resetButton = document.getElementById("btn-reset");

  if(resetButton) {

    resetButton.addEventListener("click", () => {

      resetPage();

      let a11yButtons = document.querySelectorAll("button[data-script]");

      a11yButtons.forEach(function(button, e){

        button.removeAttribute("disabled");

      });

      window.localStorage.clear();

    });

  }

  // Get Heading Outline

  let bodyID = document.body.id;

  let pageElement = document.getElementById("inner-content");
  let pageLoader = document.getElementById("loading-content");

  if(pageElement) {

    let urlParam = new URLSearchParams(window.location.search);
    let pageTest = urlParam.get("url");

    if (bodyID === "images") {

      var pageElementHref = "https://validator.w3.org/nu/?showimagereport=yes&doc=" + pageTest;
      var permaDirectURL = "https://validator.w3.org/nu/?showimagereport=yes&doc=" + pageTest + "#imagereport";

    } else {

      var pageElementHref = "https://validator.w3.org/nu/?showoutline=yes&doc=" + pageTest;
      var permaDirectURL = "https://validator.w3.org/nu/?showoutline=yes&doc=" + pageTest + "#headingoutline";

    }

    let pageError = document.createElement("p");
    pageError.classList.add("alert");
    pageErrorText = document.createTextNode("We're sorry, the content you are looking for can't be displayed right now. Try refreshing your page.");
    pageError.appendChild(pageErrorText);

    let request = new XMLHttpRequest();

    request.open("GET", pageElementHref, true);

    request.onload = function() {

      if (request.status >= 200 && request.status < 400) {

        // Success!

        let primaryHeading = document.getElementById("primary-heading");
        let primaryHeadingLink = document.createElement("a");
        primaryHeadingLink.classList.add("new-tab");
        primaryHeadingLink.setAttribute("href", pageTest);
        primaryHeadingLinkSpace = document.createTextNode(": ");
        primaryHeadingLinkText = document.createTextNode(pageTest);
        primaryHeadingLink.appendChild(primaryHeadingLinkText);
        primaryHeading.appendChild(primaryHeadingLinkSpace);
        primaryHeading.appendChild(primaryHeadingLink);

        // Permalink

        let permaElement = document.getElementById("permalink");
        let permaLink = document.createElement("a");
        permaLink.classList.add("new-tab");
        permaLink.setAttribute("href", permaDirectURL);
        permaLinkText = document.createTextNode("Permalink");
        permaLink.appendChild(permaLinkText);
        permaElement.appendChild(permaLink);

        openNewTab();

        let parser = new DOMParser();
        let response = parser.parseFromString(request.responseText, "text/html");

        if (bodyID === "images") {

          var fragment = response.getElementById("results");

        } else {

          var fragment = response.getElementById("headingoutline");

        }

        pageLoader.remove();
        pageElement.appendChild(fragment);

      } else {

        // We reached our target server, but it returned an error

        pageLoader.remove();
        pageElement.appendChild(pageError);

      }

    };

    request.onerror = function() {

      // There was a connection error of some sort

      pageLoader.remove();
      pageElement.appendChild(pageError);

    };

    request.send();

  }

  openNewTab();

});
