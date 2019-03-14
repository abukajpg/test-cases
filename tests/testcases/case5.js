module.exports = {
'tags' : ['case5'],
'test artsyjewels' : function (browser) {
browser
.url('https://store.steampowered.com/app/858810/Dawn_of_Man/') // Go to a url
.waitForElementVisible('body', 10000) // wait till page loads
.click('#game_area_purchase > div.game_area_purchase_game_wrapper > div > div.game_purchase_action > div > div.btn_addtocart > a')

.click('body > div.responsive_page_frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.page_background > div.page_content > div:nth-child(4) > div.continue_shopping_ctn > a')

.pause(1000)
.end();
}
};
