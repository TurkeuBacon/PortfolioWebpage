import $ from 'jquery';
class PageSubs {
    static loadBasePageElements(body: HTMLBodyElement): void {
        const jbody = $(body);
        $.get(jbody.find("#SidenavLink").attr("href")!, (data) => {
            jbody.prepend(data);
            const jsidenav = jbody.find("#SideNav");
            console.log(jsidenav);
            jsidenav.one("mouseenter", onNavEnter);
            jsidenav.one("mouseleave", onNavExit);
        });
        $.get(jbody.find("#TopBarLink").attr("href")!, (data) => {
            jbody.prepend(data);
        });
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