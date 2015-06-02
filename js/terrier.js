function initMenu() {

  var body = $('body');
  var panel = $('#panel');
  var menuButton = $('.menuButton');

  function onMenuButton() {
    body.toggleClass('menuOpen');
    setTimeout(function () {
      panel.on('click', onPanel);
      menuButton.off();
    }, 3)
  }

  function onPanel() {
    body.removeClass('menuOpen');
    setTimeout(function () {
      menuButton.on('click', onMenuButton);
      panel.off();
    }, 3)
  }

  if (menuButton.length && panel.length) {
    //kick it off
    menuButton.on('click', onMenuButton);
  }


}


$(function () {
  initMenu();
});