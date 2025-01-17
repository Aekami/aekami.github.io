
const routes = new Map();
const NOT_FOUND_URL = "/404.html";

/* Due to needing to be able to call this locally and not always in a server context, this should really only be called from index.html */

routes.set("home", "./index.html");
routes.set("pwd-manager","./articles/cybersec/pwd-manager.html");
routes.set("extensions-browser","./articles/IT/extensions-browser.html");
routes.set("404",NOT_FOUND_URL);


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
        window.location.href = NOT_FOUND_URL;
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
        return NOT_FOUND_URL;
    }
}