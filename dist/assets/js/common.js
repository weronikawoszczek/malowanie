"use strict";function checkScroll(){20<$(window).scrollTop()?$(".header-scroll").hasClass("scrolled")||$(".header-scroll").addClass("scrolled"):$(".header-scroll").hasClass("scrolled")&&$(".header-scroll").removeClass("scrolled")}app.common={mainInit:function(){$(".nav-icon1").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).toggleClass("open"),$(".topMenu").toggleClass("opened"),$(".desc-wrapper").toggleClass("hidden"),$(document).on("click",function e(o){$(".topMenu").hasClass("opened")?($(".topMenu").removeClass("opened"),$(".menuToggle").removeClass("open"),$(".desc-wrapper").removeClass("hidden")):$(document).on("click",e)})}),$(".topMenu a").click(function(e){$("topMenu a").removeClass("checked"),$(this).addClass("checked")}),$(".nav-el").on("click",function(e){$(".nav-el").removeClass("active"),$(this).addClass("active")}),$(".text-carousel").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3})}},$(function(){$(document).ready(function(){app.common.mainInit()})}),$(window).on("scroll",function(){checkScroll()});