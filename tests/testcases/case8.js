module.exports = {
'tags' : ['case8'],
'test artsyjewels' : function (browser) {
browser
.url('https://kaspi.kz/') // Go to a url
.waitForElementVisible('body', 1000) // wait till page loads
.click('#headerRegionConfirm__ConfirmButton')

.pause(1000)
.end();
}
};
