"use strict";$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>=100?$("#top-section").addClass("custom-navbar"):$("#top-section").removeClass("custom-navbar")}),$(window).scroll(function(){let o=$(this).scrollTop();o>=100&&o<=1e3?($(".speech-bubble").addClass("fromLeft"),$(".balloon-message").addClass("fromRight")):($(".speech-bubble").removeClass("fromLeft"),$(".balloon-message").removeClass("fromRight"))}),$(window).scroll(function(){$(this).scrollTop()>=2200?($(".speech-bubble-2").addClass("fromRight2"),$(".balloon-message-2").addClass("fromLeft2")):($(".speech-bubble-2").removeClass("fromRight2"),$(".balloon-message-2").removeClass("fromLeft2"))}),$(window).scroll(function(){let o=$(this).scrollTop();if(o<=400){const s=document.querySelector("#scroll-btn"),e=document.createElement("button");e.innerHTML="&#8593;",e.setAttribute("type","button"),e.classList.add("nes-btn","is-error","scroll-top"),s.appendChild(e),$(".scroll-top").addClass("remove-nes-btn"),$(".scroll-top").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),o<=400&&$(".scroll-top").addClass("remove-nes-btn")}else $(".scroll-top").removeClass("remove-nes-btn")})});
