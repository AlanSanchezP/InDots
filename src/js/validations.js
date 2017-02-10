(function () {
  $('#contact-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    }
  });

  $('#footer-newsletter-form, #homepage-newsletter-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    }
  });
})();