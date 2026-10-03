/* BilldDesk 站点交互：导航展开 / 浮动按钮 / 链接绑定 */
(function () {
  'use strict';

  // 网盘按钮统一绑定：读 window.SITE_LINKS，按 data-link 属性跳转
  document.querySelectorAll('[data-link]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var key = el.getAttribute('data-link');
      var url = window.SITE_LINKS && window.SITE_LINKS[key];
      if (url) {
        e.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });
  });

  // 移动端导航展开
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 返回顶部按钮：下滚后出现
  var toTop = document.querySelector('.js-to-top');
  if (toTop) {
    var onScroll = function () {
      if (window.scrollY > 420) { toTop.classList.add('show'); }
      else { toTop.classList.remove('show'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
