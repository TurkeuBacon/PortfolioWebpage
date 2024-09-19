import $ from 'jquery';

console.log("Initiating Webpage");

$(function() {
    $(".sidenavwrapper").one("mouseenter", onNavEnter);
    $(".sidenavwrapper").one("mouseleave", onNavExit);
});

function onNavEnter() {
    $(".sidenavwrapper").children(".sidenav").animate({left:'0px'},750);
    $(".sidenavwrapper").children(".sidenavtab").animate({left:'250px'},750, ()=>{
        $(".sidenavwrapper").one("mouseenter", onNavEnter);
    });
}
function onNavExit() {
    $(".sidenavwrapper").children(".sidenav").animate({left:'-250px'},750);
    $(".sidenavwrapper").children(".sidenavtab").animate({left:'0px'},750, ()=>{
        $(".sidenavwrapper").one("mouseleave", onNavExit);
    });
}