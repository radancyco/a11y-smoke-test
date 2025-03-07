function fetchAndAppendFragment(url, selector, target) {

    fetch(url).then(response => {

        if (!response.ok) {

            throw new Error(`HTTP error! Status: ${response.status}`);

        }

        return response.text();

    }).then(html => {

        const tempDiv = document.createElement("div");

        tempDiv.setAttribute("id", "a11y-smoke-test"); 
        tempDiv.innerHTML = html;

        const fragment = tempDiv.querySelector(selector);

        if (fragment) {

            document.querySelector(target).appendChild(fragment);

        } else {

            console.error(`Element "${selector}" not found in fetched content.`);

        }

    }).catch(error => {

        console.error("Fetch error:", error);

    });

}

fetchAndAppendFragment("https://radancy.dev/a11y-smoke-test/module", "#a11y-module", "body");