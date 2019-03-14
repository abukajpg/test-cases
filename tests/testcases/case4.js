module.exports = {
'tags' : ['case4'],
'test artsyjewels' : function (browser) {
browser
.url('https://store.steampowered.com/login/?redir=&redir_ssl=1')
.waitForElementVisible('body', 10000)
.click('#link_forgot_password')
.setValue('#link_forgot_password > div > p:nth-child(2) > input[type="email"]', 'tungpr123@mail.ru')
.click('#link_forgot_password > div > p:nth-child(3) > input')
.pause(1000)
.end();
}
};
