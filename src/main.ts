import $ from 'jquery';

console.log("Initiating Webpage");

$(function() {
    $(".sidenavwrapper").one("mouseenter", onNavEnter);
    $(".sidenavwrapper").one("mouseleave", onNavExit);
});

function onNavEnter() {
    $(".sidenavwrapper").animate({left:'250px'},750, ()=>{
        $(".sidenavwrapper").children(".sidenavtab").children("p").text("< NAVIGATION <");
        $(".sidenavwrapper").one("mouseenter", onNavEnter);
    });
}
function onNavExit() {
    $(".sidenavwrapper").animate({left:'0px'},750, ()=>{
        $(".sidenavwrapper").children(".sidenavtab").children("p").text("> NAVIGATION >");
        $(".sidenavwrapper").one("mouseleave", onNavExit);
    });
}