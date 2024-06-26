
function loadNavBar() {
    let pathToNavBar;
    const baseURL =  window.location.origin;
    const currentPath = window.location.pathname;

    if (currentPath.includes('/wakfu/')) {
        pathToNavBar = baseURL + '/navBars/wakfu/navBar.html';
    } else {
        pathToNavBar = baseURL + '/navBars/home/navBar.html';
    }

    fetch(pathToNavBar)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching navBar.'); // console.log(response);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const navbar = doc.querySelector('.navBar');
            const navContainer = document.querySelector('.nav');
            navContainer.appendChild(navbar);

            if (currentPath.includes('/wakfu/stuffs')) {
                loadWakfuStuffLinks();
            } else if (currentPath.includes('/wakfu/')) {
                loadWakfuLinks();
            } else {
                console.log("You shouldn't be here :thinking:");
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

function loadWakfuStuffLinks(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLink');
    wakfuHomeLink.href = `${window.location.origin}/wakfu/wakfu-home.html`;

    const stuffLink = document.getElementById('stuffLink');
    stuffLink.href = `${window.location.origin}/wakfu/stuffs/avant_de_se_stuff.html`;
    
}

function loadWakfuLinks(){

    const homeLink = document.getElementById('homeLink');
    homeLink.href = `${window.location.origin}/index.html`;

    const imageLink = document.getElementById('imageLink');
    imageLink.src = `${window.location.origin}/images/aekami_elio.png`;

    const wakfuHomeLink = document.getElementById('wakfuHomeLink');
    wakfuHomeLink.href = `${window.location.origin}/wakfu/wakfu-home.html`;

    const stuffLink = document.getElementById('stuffLink');
    stuffLink.href = `${window.location.origin}/wakfu/stuffs/avant_de_se_stuff.html`;
 
}
