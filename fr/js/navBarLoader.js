
function loadNavBar() {
    let pathToNavBar;
    const baseURL =  window.location.origin;
    const currentPath = window.location.pathname;

    if (currentPath.includes('/fr/')) {
        if (currentPath.includes('/wakfu/')) {
            pathToNavBar = baseURL + '/fr/navBars/wakfu/navBar.html';
        } else {
            pathToNavBar = baseURL + '/fr/navBars/home/navBar.html';
        }
    }else if (currentPath.includes('/en/')) { 
        if (currentPath.includes('/wakfu/')) {
            pathToNavBar = baseURL + '/fr/navBars/wakfu/navBar.html'; // TODO edit with /en/ version of it whenever it will be added
        } else {
            pathToNavBar = baseURL + '/fr/navBars/home/navBar.html'; // TODO edit with /en/ version of it whenever it will be added
        }
    }
    else{
        pathToNavBar = baseURL + '/fr/navBars/home/navBar.html'; // the "default" navbar.
    }
    
    fetch(pathToNavBar)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching navBar.');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const navbar = doc.querySelector('.navBar');
            const navContainer = document.querySelector('.nav');
            navContainer.appendChild(navbar);

            if (currentPath.includes('/fr/')) {
                if (currentPath.includes('/wakfu/stuffs')) {
                    loadWakfuHomeLinksFr();
                } else if (currentPath.includes('/wakfu/')) {
                    loadWakfuLinksFr();
                } else {
                    loadHomeLinksFr();
                }
            }else if (currentPath.includes('/en/')) {

            }else {
                loadHomeLinksFr();
            }
              
            const listItems = navContainer.querySelectorAll('ul li');
            listItems.forEach(item => {
                const anchor = item.querySelector('a');
                if (anchor) {
                    item.addEventListener('click', () => {
                        window.location.href = anchor.href;
                    });
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// TODO refactor this monstruosity, logic should be oblivious to whatever the actual html is. Maybe move to the html navBar files themselves.
function loadHomeLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const colorPicker = document.getElementById('colorPickerLink');
    colorPicker.href = `${window.location.origin}/fr/pages/colorPicker.html`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLink');
    wakfuHomeLink.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;

    const aboutLink = document.getElementById('aboutLink');
    aboutLink.href = `${window.location.origin}/fr/pages/about.html`;
}

function loadWakfuHomeLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLink');
    wakfuHomeLink.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;

}

function loadWakfuLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuLink = document.getElementById('wakfuHomeLink');
    wakfuLink.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;
 
}