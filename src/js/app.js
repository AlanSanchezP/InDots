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