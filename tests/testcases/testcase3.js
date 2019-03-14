module.exports = {
'tags' : ['testcase3'],
'test artsyjewels' : function (browser) {
browser
.url('https://store.steampowered.com/login/?redir=?l=russian&re..')
.waitForElementVisible('body', 1000)
.setValue('#input_username', 'o1esh')
.setValue('#input_password', 'asdasd')
.click('#login_btn_signin > button > span')
.pause(1000)
.end();
}
};
