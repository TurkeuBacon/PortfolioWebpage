import $ from 'jquery';

console.log("Initiating Webpage");

$(function() {
    $(".sidenav-wrapper").one("mouseenter", onNavEnter);
    $(".sidenav-wrapper").one("mouseleave", onNavExit);
});

function onNavEnter() {
    $(".sidenav-wrapper").animate({left:'250px'},750, ()=>{
        $(".sidenav-wrapper").children(".sidenavtab").children("p").text("< NAVIGATION <");
        $(".sidenav-wrapper").one("mouseenter", onNavEnter);
    });
}
function onNavExit() {
    $(".sidenav-wrapper").animate({left:'0px'},750, ()=>{
        $(".sidenav-wrapper").children(".sidenavtab").children("p").text("> NAVIGATION >");
        $(".sidenav-wrapper").one("mouseleave", onNavExit);
    });
}