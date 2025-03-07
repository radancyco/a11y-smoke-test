const container = document.createElement('div');
    fetch('https://radancy.dev/a11y-smoke-test/')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            document.body.appendChild(container);

            // Optionally add close functionality
            const closeButton = container.querySelector('#close-ui');
            closeButton.addEventListener('click', function() {
                document.body.removeChild(container);
            });
        });