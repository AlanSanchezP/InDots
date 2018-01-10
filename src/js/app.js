(function() {
  document.querySelector('#ejemploData').addEventListener('click', function () {
    console.log('AAAAAAAAAAAA');
      var user = {},
      dataFormInformation = new FormData();
      user.name = $(".homepage-six-section > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > input:nth-child(1)").val();
      user.email = $(".homepage-six-section > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > input:nth-child(1)").val();
      //dataFormInformation.append('campaign', JSON.stringify({campaignId: "Xj9OK"}));
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.getresponse.com/v3/contacts",
          "method": "POST",
          "headers": {
            "X-Auth-Token": "api-key 4ab319582cc0cb75b8c45800f85c7d6b",
            "Content-Type": "application/json",
            "withCredentials": true
          },
          "processData": false,
          "data": {
            "name": user.name,
            "email": user.email,
            "campaign": {
              "campaignId": "427bR"
            }
          }
        }

          $.ajax(settings).done(function (response) {
          console.log(response);
          });
  });
})();

(function () {
  $.validator.setDefaults({
    invalidHandler: function (event, validator) {
      var form = $(this);
      form.find('.newsletter-form')
      .removeClass(form.hasClass('success') ? 'success' : 'error')
      .html('');
    },
    submitHandler: function (form) {
      
    }
  });
})();

$("#newsletter-form").validate({
  // required fields
  name: 'required',
  email: 'required',
  messages: {
   name: "Por favor, introduce tu Nombre.",
   email: "Por favor, introduce un Correo Electrónico.",
  }
});

(function () {
  $.validator.setDefaults({
    invalidHandler: function (event, validator) {
      var form = $(this);
      form.find('.indots-contact-form')
      .removeClass(form.hasClass('success') ? 'success' : 'error')
      .html('');
    },
    submitHandler: function (form) {
      var $form = $(form).serialize(),
        fields = $(form).find('select, input, textarea, button').not('[disabled]'),
        formMessage = $(form).find('.indots-contact-form'),
        successMessage = $('<i class="fa fa-check-circle"></i><span>Gracias por contactarnos</span>'),
        errorMessage = $('<i class="fa fa-times-circle"></i><span>Hubo un error</span>'),
        setMessage = function (success) {
          var message = success ? successMessage : errorMessage;
          fields.removeAttr('disabled');
          formMessage.removeClass(success ? 'error' : 'success');
          formMessage.addClass(success ? 'success' : 'error');
          formMessage.html(message);
        };

      fields.attr('disabled', 'disabled');
      formMessage.html('');
      if (!$(form).find('.button-wrapper .loader').length) {
        $(form).find('.button-wrapper').addClass('disabled');
      }
      $.ajax({
        url: $(form).attr('action'),
        method: 'POST',
        data: $form
      })
        .done(function (data) {
          setMessage(parseInt(data) === 1 || data.status === "subscribed");
          form.reset();
        })
        .fail(function () {
          setMessage(false);
        })
        .always(function () {
          fields.removeAttr('disabled');
          $(form).find('.button-wrapper').removeClass('disabled');
        });
    }
  });
})();

$("#indots-contact-form").validate({
  // required fields
  contactname: 'required',
  contactemail: 'required',
  contactmessage: 'required',
  messages: {
   contactname: "Por favor, introduce tu Nombre.",
   contactemail: "Por favor, introduce tu Correo Electrónico.",
   contactmessage: "Por favor, introduce tu mensaje.",
  }
});