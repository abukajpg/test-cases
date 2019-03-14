module.exports = { 
  'tags' : ['testCase1'], 
  'test artsyjewels' : function (browser) { 
  browser 
  .url('https://www.artsyjewels.com/') // Go to a url 
  .waitForElementVisible('body', 7000) // wait till page loads 
  .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > a') 
  .pause(1000) 
  .end(); 
  } 
  }; 
  