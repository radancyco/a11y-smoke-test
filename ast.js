


        function fetchAndAppendFragment(url, selector, target) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(html => {
                    const tempDiv = document.createElement('div');
                    tempDiv.setAttribute("id", "hello-there"); 
                    tempDiv.innerHTML = html;
        
                    const fragment = tempDiv.querySelector(selector);
                    if (fragment) {
                        document.querySelector(target).appendChild(fragment);
                    } else {
                        console.error(`Element "${selector}" not found in fetched content.`);
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        }
        
        // Example usage:
        // Fetch from "example.com/page.html", get element "#content", and append it to <body>
        fetchAndAppendFragment('https://radancy.dev/a11y-smoke-test/', '#module', 'body');
        

