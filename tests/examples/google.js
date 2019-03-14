module.exports = {
   tags: ['google'],
   'Demo test Google' : function (browser) {
        browser
        .url('http://www.yandex.kz') // Go to a url
        .waitForElementVisible('body', 1000) // wait till page loads
        .assert.title('Яндекс') // Make sure Site title matches
        .assert.visible('input__input[type=text]')
         .setValue('input__input[type=text]', 'Memes') // send values
         .click('button__text[name=sumbit]') // click on search box
        .pause(1000)
        .end();
      }
};
// = comment not necessary for code
