function initMenu() {

  var body = document.querySelectorAll('body')[0];
  var panel = document.querySelectorAll('#panel')[0];
  var menuButton = document.querySelectorAll('.menuButton')[0];

  function onMenuButton() {
    console.log('on menu');
    toggleClass(body, 'menuOpen');
    setTimeout(function () {
      menuButton.removeEventListener('click', onMenuButton, false);
      panel.addEventListener('click', onPanel);
    }, 10)
  }

  function onPanel() {
    console.log('on panel');
    removeClass(body, 'menuOpen');
    setTimeout(function () {
      panel.removeEventListener('click', onPanel, false);
      menuButton.addEventListener('click', onMenuButton);
    }, 10)
  }

  if (menuButton && panel) {
    //kick it off
    console.log(menuButton, panel);
    menuButton.addEventListener('click', onMenuButton);
  }

}

function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}


if (document.readyState != 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}

function init() {
  initMenu();
  //dropdowns();
}

function dropdowns() {
  var toggle = '[data-toggle="dropdown"]';
  var found = $(toggle);
  console.log(found);
  found.on('click', function () {
    console.log('clicked');
    var e = $(this);

    var dm = e.parent().find('.dropdown-menu');
    dm.toggleClass('open');

  });
}
