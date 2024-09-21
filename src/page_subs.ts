import $ from 'jquery';
class PageSubs {
    static addSidenav(bodyElement: HTMLBodyElement): boolean {
        const jbody = $(bodyElement);
        if(jbody.find("#SideNav").length > 0) {
            return false;
        } else {
            const sidenavHtml = "<div id=\"SideNav\" class=\"sidenav-wrapper\"><div class=\"sidenav\"><a href=\"#projects\" class=\"active\">Projects</a><a href=\"#about\">About</a><a href=\"#contact\">Contact</a></div><div class=\"sidenav-tab\"><img class=\"sidenav-tab-icon\" src=\"./assets/images/menuIcon.png\"/></div></div>";
            jbody.prepend(sidenavHtml);
            const jsideNav = jbody.find("#SideNav");
            jsideNav.one("mouseenter", onNavEnter);
            jsideNav.one("mouseleave", onNavExit);
            return true;
        }
    }
    static addTopBar(bodyElement: HTMLBodyElement): boolean {
        const jbody = $(bodyElement);
        if(jbody.find("#TopBar").length > 0) {
            return false;
        } else {
            const topBarHtml = "<div id=\"TopBar\" class=\"top-bar\"><div class=\"name-title-bubble\"><p class=\"name-title-text\">GABRIEL BACON</p></div><div class=\"profession-title-bubble\"><p class=\"profession-title-text\">Software/Game Developer</p></div></div>";
            jbody.prepend(topBarHtml);
            const jtopBar = jbody.find("#TopBar");
            jtopBar.one("mouseenter", onNavEnter);
            jtopBar.one("mouseleave", onNavExit);
            return true;
        }
    }
}

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
export {PageSubs};