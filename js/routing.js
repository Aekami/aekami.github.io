
const routes = new Map();

// Note : need to add bese location to make an absolute url. Current implementation only work because all urls are in the same level of nesting
routes.set("pwd-manager","./articles/cybersec/pwd-manager.html");
routes.set("extensions-browser","./articles/IT/extensions-browser.html");


function goToPage(routeName) {
    if(!routeName){
        console.log("routeName undefined");
        return;
    }

    let routeUrl = routes.get(routeName);
    if(routeUrl){
        window.location.href = routeUrl;
    }else{
        console.log("Wrong route name given. No such route name :");
        console.log(JSON.stringify(routeName));
    }
}

function getPageUrl(routeName){
    if(!routeName){
        console.log("routeName undefined");
        return;
    }
    let routeUrl = routes.get(routeName);
    if(routeUrl){
        return routeUrl;
    }else{
        console.log("Wrong route name given. No such route name :");
        console.log(JSON.stringify(routeName));
    }
}