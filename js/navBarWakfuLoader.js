
function loadNavBar() {
    let pathToNavBar;
    const currentPath = window.location.pathname;
    
    if(currentPath.includes('/wakfu/stuffs')){
        pathToNavBar = '../../navBars/wakfu/navBar.html';
    } 
    else if (currentPath.includes('/wakfu/')) {
        pathToNavBar = '../navBars/wakfu/navBar.html';
    } else {
        pathToNavBar = '../navBars/home/navBar.html';
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
