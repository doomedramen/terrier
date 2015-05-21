function initSlideOut() {
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });
  document.querySelector('.menuButton').addEventListener('click', function () {
    slideout.toggle();
  });
}

$(function () {
  initSlideOut();
});