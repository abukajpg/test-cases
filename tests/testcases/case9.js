// module.exports = {
// 'tags' : ['case9'],
// 'test artsyjewels' : function (browser) {
// browser
// .url('https://www.sulpak.kz/f/mobilniye_telefoniy') // Go to a url
// .waitForElementVisible('body', 10000) // wait till page loads
// .click('#filter-properties > div > div.filterParameters > div:nth-child(7) > span')
// //.click('#\31 90')
// // .url('https://www.sulpak.kz/f/mobilniye_telefoniy')
// .pause(1000)
// .end();
// }
// };

module.exports = {
'tags' : ['case9'],
'test artsyjewels' : function (browser) {
browser
.url('https://www.kaspi.kz/') // Go to a url
.waitForElementVisible('body', 1000) // wait till page loads
.click('#headerRegionConfirm__ConfirmButton')
.assert.visible('#headerRegionId')
.click('#headerMenu > a:nth-child(1)')
.assert.visible('body > div:nth-child(17) > div > div > div.dialog.animation-fadeIn.undefined')
.click('body > div:nth-child(17) > div > div > div.dialog.animation-fadeIn.undefined > div.current-location__dialog > div > ul:nth-child(1) > li:nth-child(1) > a')
.assert.visible('#citySelector > span')
.click('#page > nav > div > ul > li:nth-child(6) > a > span')
.assert.visible('#page > div.search-result.mount-search-result > div > div.filters > div:nth-child(1) > div > div > a')
.pause(1000)
.end();
}
};
