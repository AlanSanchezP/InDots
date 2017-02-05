!function(){$.extend($.validator.messages,{required:"Este campo es obligatorio",remote:"Please fix this field",email:"Ingresa una dirección de correo válida",url:"Ingresa una URL válida",date:"Ingresa una fecha válida",dateISO:"Ingresa una fecha válida (ISO)",number:"Ingresa un número válido",digits:"Solo se permiten números dígitos",creditcard:"Ingresa un número de tarjeta válido",equalTo:"Los valores deben coincidir",accept:"Please enter a value with a valid extension",maxlength:jQuery.validator.format("No ingreses más de {0} caracteres"),minlength:jQuery.validator.format("Ingresa al menos {0} caracteres"),rangelength:jQuery.validator.format("El texto debe tener entre {0} y {1} caracteres"),range:jQuery.validator.format("Ingresa un valor entre {0} y {1}"),max:jQuery.validator.format("Ingresa un valor menor o igual que {0}"),min:jQuery.validator.format("Ingresa un valor mayor o igual que {0}")}),$.validator.setDefaults({invalidHandler:function(e,a){var s=$(this);s.find(".form-message").removeClass(s.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var a=$(e).serialize(),s=$(e).find("select, input, textarea, button"),i=$(e).find(".form-message"),t=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),n=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(e){var a=e?t:n;s.removeAttr("disabled"),i.removeClass(e?"error":"success"),i.addClass(e?"success":"error"),i.html(a)};s.attr("disabled","disabled"),i.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:a}).done(function(a){r(1===parseInt(a)),e.reset()}).fail(function(){r(!1)}).always(function(){s.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),function(){function e(e,a){var s='<div class="item"><div class="flash-indots-modal-item-photo cover" style="background-image: '+e.cover+'"></div><div class="flash-indots-modal-item-data"><h3 class="flash-indots-modal-item-title flash-indots-icon-title">'+e.title+'</h3><div class="flash-indots-modal-item-description">'+e.description+'</div><div class="flash-indots-modal-item-info"><div><span class="flash-indots-green-text">Formato</span>'+e.format+'</div><div><span class="flash-indots-green-text">Duración</span>'+e.duration+'</div><div><span class="flash-indots-green-text">Tiempo</span>'+e.lessonDuration+'</div><div><span class="flash-indots-green-text">Precio</span>'+e.price+'</div></div><form id="flash-indots-modal-form_'+e.index+'" class="flash-indots-modal-form" action="'+a.sendTo+'"><input type="hidden" name="'+a.hiddenName+'"><div class="input-wrapper"><input class="contact-input" type="email" id="email-flash-indots_'+e.index+'" name="'+a.emailName+'" placeholder="Correo electrónico"><div class="form-message"></div></div><div class="button-wrapper"><button class="indots-button green" type="submit" name="submit">Inscribirme</button><div class="loader indots-loader vertical-center"><div class="ball-pulse-sync"><div class="blue"></div><div class="blue"></div><div class="blue"></div></div></div></div></form></div></div>';return s}function a(a){var s={cover:$(this).find(".flash-indots-item-photo").css("background-image").replace('"',"'"),title:$(this).find(".flash-indots-item-name span").text(),description:$(this).attr("data-item-description"),format:$(this).attr("data-item-format"),duration:$(this).attr("data-item-duration"),lessonDuration:$(this).attr("data-item-lesson-duration"),price:$(this).attr("data-item-price"),index:a},i={sendTo:".",emailName:"email",hidenName:"name"},t={};t[i.emailName]={required:!0,email:!0},t[i.hidenName]={required:!0},r.append(e(s,i)),r.find("#flash-indots-modal-form_"+a).validate({rules:t})}function s(){r.slick({prevArrow:'<span class="slick-prev circle fa fa-angle-left"></span>',nextArrow:'<span class="slick-next circle fa fa-angle-right"></span>'})}function i(){var e='<div class="remodal" data-remodal-id="flash-indots-modal"><div class="flash-indots-modal-header"><h2 class="flash-indots-modal-title flash-indots-icon-title">Flash InDots</h2><button data-remodal-action="close" class="remodal-close"></button></div><div class="flash-indots-modal-body"><div class="flash-indots-carousel"></div></div></div>';$("main").append(e),n=$('[data-remodal-id="flash-indots-modal"]').remodal(),r=$('[data-remodal-id="flash-indots-modal"] .flash-indots-carousel'),$(".flash-indots-items .flash-indots-item").each(a),s()}function t(){r.slick("slickGoTo",$(this).index()),n.open()}var n=null,r=null;$(".flash-indots-items").length&&(i(),$(".flash-indots-items").on("click",".flash-indots-item",t))}(),function(){function e(e){$(e.target).is("nav .menu-trigger")||$(e.target).is("nav .menu-container")||$(e.target).closest("nav .menu-container").length||!$("nav .menu-container").hasClass("active")||(e.preventDefault(),$("nav .menu-container").removeClass("active"),$("body").removeClass("noscroll"))}function a(){$("nav .menu-container").hasClass("active")?($("nav .menu-container").removeClass("active"),$("body").removeClass("noscroll")):($("nav .menu-container").addClass("active"),$("body").addClass("noscroll"))}var s=window.matchMedia("(max-width: 876px)");s.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$("nav .menu-trigger").click(a)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll"),$("nav .menu-container").removeClass("active"),s.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$("nav .menu-trigger").click(a))})}(),function(){$("#contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0}}}),$("#footer-newsletter-form").validate({rules:{email:{required:!0,email:!0}}}),$("#homepage-newsletter-form").validate({rules:{email:{required:!0,email:!0},name:{required:!0}}})}();