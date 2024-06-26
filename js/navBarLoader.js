
function loadNavBar() {
    fetch('../navBar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching navBar.');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const navbar = doc.querySelector('navBar');
            document.querySelector('.nav').appendChild(navbar);
        })
        .catch(error => console.error('Error loading navbar:', error));
}
    // document.querySelector(".nav");
    // let fragment = document.createDocumentFragment();