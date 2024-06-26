
function loadNavBar() {
    fetch('../navBars/wakfu/navBar.html')
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error('Error fetching navBar.');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const navbar = doc.querySelector('.navBar');
            document.querySelector('.nav').appendChild(navbar);
        })
        .catch(error => console.error('Error loading navbar:', error));
}
