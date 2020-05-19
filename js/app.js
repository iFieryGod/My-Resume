'use strict'
$(document).ready(function () {
  // Adding the custom styling to the navigation section based on where the scroll position is on the window, creating a simple animation
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if(position >= 100) {
      $('#top-section').addClass('custom-navbar');
    } else {
      $('#top-section').removeClass('custom-navbar');
    }
  });
// This is the fade-in effect of the speech balloon and balloon messages based on the scroll position on the window. the top-side
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 100 && position <= 1000) {
      $('.speech-bubble').addClass('fromLeft');
      $('.balloon-message').addClass('fromRight');
    } else {
      $('.speech-bubble').removeClass('fromLeft');
      $('.balloon-message').removeClass('fromRight');
    }
  });
// This is the fade-in effect of the speech balloon and balloon messages based on the scroll position on the window. the bottom-side
  $(window).scroll(function () {
    let position = $(this).scrollTop();
        if (position >= 2200) {
          $('.speech-bubble-2').addClass('fromRight2');
          $('.balloon-message-2').addClass('fromLeft2');
        } else {
          $('.speech-bubble-2').removeClass('fromRight2');
          $('.balloon-message-2').removeClass('fromLeft2');
        }
  });
// This is the creation of scroll-to-top button functionality that will send you to the top of page also based on scroll position.
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position <= 400) {
      const div = document.querySelector('#scroll-btn');
      const btn = document.createElement('button');
      btn.innerHTML = '&#8593;'
      btn.setAttribute('type', 'button')
      btn.classList.add('nes-btn','is-error','scroll-top')
      div.appendChild(btn)
      $('.scroll-top').addClass('remove-nes-btn');
      $(".scroll-top").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
      });
      if (position <= 400) {
        $('.scroll-top').addClass('remove-nes-btn');
      }
    } else {
      $('.scroll-top').removeClass('remove-nes-btn');
    }    
  });
});