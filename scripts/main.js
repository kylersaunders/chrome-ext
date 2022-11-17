window.onload = function () {
  console.log("onload" + Date());
};
document.addEventListener("scroll", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { command: "all" });
  });
});
document.getElementById("one").addEventListener("click", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { command: "one" });
  });
});
