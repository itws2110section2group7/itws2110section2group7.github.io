$(document).ready(function() {
  $('.nav a').on('click', function() {
    if ($(this).next().css('display') == "none") {
      //not slide down, then slide down
      $('.nav-item').children('ul').slideUp(300);
      $(this).next('ul').slideDown(300);
      $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
    } else {
      //already slide down,then slide up
      $(this).next('ul').slideUp(300);
      $('.nav-item.nav-show').removeClass('nav-show');
    }
  });

  $("#scroll-to-preamble").click(function() {
    window.scrollTo(0, 0);
  });

  $("#scroll-to-article-I").click(function() {
    document.getElementById('article-one').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-article-II").click(function() {
    document.getElementById('article-two').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-article-III").click(function() {
    document.getElementById('article-three').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-article-IV").click(function() {
    document.getElementById('article-four').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-article-V-to-VII").click(function() {
    document.getElementById('article-five-to-seven').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-amendments-one-five").click(function() {
    document.getElementById('amendments-one-five').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-amendments-six-ten").click(function() {
    document.getElementById('amendments-six-ten').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-amendments-eleven-fifteen").click(function() {
    document.getElementById('amendments-eleven-fifteen').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-amendments-sixteen-twenty").click(function() {
    document.getElementById('amendments-sixteen-twenty').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });

  $("#scroll-to-amendments-last-part").click(function() {
    document.getElementById('amendments-last-part').scrollIntoView(true);
    $(window).scrollTop($(window).scrollTop() - 30);
  });
});