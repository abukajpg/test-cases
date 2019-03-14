module.exports = {
'tags' : ['testcase2'],
'Demo test Google' : function (browser) {
browser
.url('https://www.artsyjewels.com/')
.waitForElementVisible('body', 1000)  
.assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels')
.click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(5) > a')
.pause(2000)
.end();
}
};
