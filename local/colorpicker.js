(function() {

  // Ajax Call

  function myLoad(url, sourceContainer, targetContainer, replace) {

    var xhr = new XMLHttpRequest();

    xhr.onerror = function() {

      throw "Request failed. HTTP code " + xhr.status;

    };

    xhr.onload = function() {

      if (!xhr.status || (xhr.status >= 400)) {

        throw "Request failed. HTTP code " + xhr.status;

      }

      var temp = document.createElement("DIV");

      temp.innerHTML = xhr.responseText;
      var ele = temp.querySelector(sourceContainer);

      if (ele) {

        if (replace) {

          targetContainer.innerHTML = ele.outerHTML;

        } else {

          targetContainer.appendChild(ele);

        }

      }

    };

    xhr.open("GET", url, true);

    xhr.send();

  }

 myLoad("../contrast.html", "#link-contrast", "#index");

})();
