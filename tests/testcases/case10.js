module.exports = {
'tags' : ['case10'],
'test artsyjewels' : function (browser) {
browser
.url('https://kaspi.kz/') // Go to a url
.waitForElementVisible('body', 1000) // wait till page loads
.click('#headerRegionConfirm__ConfirmButton')
.click('#footerSocials > div > a.footerSocials__item.footerSocials__item--insta')
.click('#footerSocials > div > a.footerSocials__item.footerSocials__item--vk')
.click('#footerSocials > div > a.footerSocials__item.footerSocials__item--fb')

.pause(1000)
.end();
}
};
