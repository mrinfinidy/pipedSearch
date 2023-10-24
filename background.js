var searchThis = {
    "id": "selectedText",
    "title": "Search on Piped",
    contexts: ["selection"]
};

browser.contextMenus.create(searchThis);

browser.contextMenus.onClicked.addListener(function(clickedItem) {
    var searchTerm = encodeURI(clickedItem.selectionText);
    searchTerm = searchTerm.replace(/\#/g, '%23');
    searchTerm = searchTerm.replace(/\&/g, '%26');
    var address = "https://piped.video/results?search_query=" + searchTerm;
    browser.tabs.create({url:address});
})
