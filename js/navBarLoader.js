
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
                    loadHomeLinks();
                }
            }else if (currentPath.includes('/en/')) {

            }else {
                loadHomeLinks();
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

/* FR */
// TODO refactor this monstruosity, logic should be oblivious to whatever the actual html is. Maybe move to the html navBar files themselves.
/** Adds the links for the general home page */
function loadHomeLinks(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLinkFr = document.getElementById('wakfuHomeLinkFr');
    wakfuHomeLinkFr.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;

    const wakfuHomeLinkEn = document.getElementById('wakfuHomeLinkEn');
    wakfuHomeLinkEn.href = `${window.location.origin}/en/wakfu/wakfu-home.html`;

    const aboutLink = document.getElementById('aboutLink');
    aboutLink.href = `${window.location.origin}/pages/about.html`;
}

/** Adds the links for the wakfu FR home page */
function loadWakfuHomeLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLinkFr');
    wakfuHomeLink.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;

}

/** Adds the links for the FR stuffs page */
function loadWakfuLinksFr(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuLink = document.getElementById('wakfuHomeLinkFr');
    wakfuLink.href = `${window.location.origin}/fr/wakfu/wakfu-home.html`;
 
}


/* EN */
/** Adds the links for the wakfu EN home page */
function loadWakfuHomeLinksEn(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLinkEn');
    wakfuHomeLink.href = `${window.location.origin}/en/wakfu/wakfu-home.html`;

}

/** Adds the links for the EN stuffs page */
function loadWakfuLinksEn(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuLink = document.getElementById('wakfuHomeLinkFr');
    wakfuLink.href = `${window.location.origin}/en/wakfu/wakfu-home.html`;
 
}
