import $ from 'jquery';

let BASE = [location.protocol, "//", location.host].join('');
if(BASE == "https://turkeubacon.github.io") {
    console.log("GITHUB");
    BASE += "/PortfolioWebpage";
} else {
    console.log("LOCAL");
}

console.log("Initiating Webpage");

$(function(): void {
    $(".sidenav-wrapper").one("mouseenter", onNavEnter);
    $(".sidenav-wrapper").one("mouseleave", onNavExit);
});

function onNavEnter(): void {
    $(".sidenav-wrapper").animate({left:'250px'},750, ()=>{
        $(".sidenav-wrapper").children(".sidenavtab").children("p").text("< NAVIGATION <");
        $(".sidenav-wrapper").one("mouseenter", onNavEnter);
    });
}
function onNavExit(): void {
    $(".sidenav-wrapper").animate({left:'0px'},750, ()=>{
        $(".sidenav-wrapper").children(".sidenavtab").children("p").text("> NAVIGATION >");
        $(".sidenav-wrapper").one("mouseleave", onNavExit);
    });
}