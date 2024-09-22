import $ from 'jquery';
import { PageSubs } from './page_subs';

console.log("Initiating Webpage");
document.querySelector('link[rel="import"]');

$(function(): void {
    PageSubs.loadBasePageElements(document.body as HTMLBodyElement);
});