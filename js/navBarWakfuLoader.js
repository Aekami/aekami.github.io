
function getBaseURL() {
    return document.baseURI;
}

function loadNavBar() {
    let pathToNavBar;
    const currentPath = window.location.pathname;
    const baseURL =  document.baseURI;
    
    if (currentPath.includes('/wakfu/')) {
        pathToNavBar = baseURL + '/navBars/wakfu/navBar.html';
    } else {
        pathToNavBar = baseURL + '/navBars/home/navBar.html';
    }

    fetch(pathToNavBar)
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
