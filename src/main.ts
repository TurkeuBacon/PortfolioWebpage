import $ from 'jquery';
import { PageSubs } from './page_subs';

console.log("Initiating Webpage");

$(function(): void {
    if(PageSubs.addSidenav(document.body as HTMLBodyElement)) {
        console.log("SideNav successfully added");
    }
    if(PageSubs.addTopBar(document.body as HTMLBodyElement)) {
        console.log("TopBar successfully added");
    }
});