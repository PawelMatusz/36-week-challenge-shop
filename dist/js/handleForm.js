/* paste this in verbatim */
window.formbutton =
  window.formbutton ||
  function() {
    (formbutton.q = formbutton.q || []).push(arguments);
  };

/* customize formbutton here*/

formbutton('create', {
  action: 'https://formspree.io/xbjzqegr',
  title: 'How can we help?',
  fields: [
    {
      type: 'email',
      label: 'Email:',
      name: 'email',
      required: true,
      placeholder: 'your@email.com',
    },
    {
      type: 'textarea',
      label: 'Message:',
      name: 'message',
      placeholder: "What's on your mind?",
    },
    { type: 'submit' },
  ],
  styles: {
    fontFamily: 'Montserrat',
    title: {
      background: 'gray',
    },
    button: {
      background: 'gray',
    },
  },
  initiallyVisible: true,
});

window.addEventListener('DOMContentLoaded', function() {
  // get the form elements defined in your form HTML above

  const form = document.querySelector('[data-newsletter-form]');
  const button = document.querySelector('[data-newsletter-button]');
  const status = document.querySelector('[data-newsletter-status]');

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = 'display: none ';
    status.innerHTML = 'Thanks!';
  }

  function error() {
    status.innerHTML = 'Oops! There was a problem.';
  }

  // handle the form submission event

  form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
