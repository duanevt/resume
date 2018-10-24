// button download4
console.log("loading buttons.js")
// var download = $('.download'),
//     meter = $('.meter');
//
//   $('.button-download').on('click', function(e) {
//     download.toggleClass('is-active');
//
//     setTimeout(function() {
//       meter.toggleClass('is-done');
//       setTimeout(function() {
//         download.removeClass('is-active');
//         console.log("timedout ... remove is active")
//       }, 10000);
//     }, 4000);
//
//     // e.preventDefault(); // allow the download to happen as well.
//   });

  // $('#reset').on('click', function() {
  //   download.removeClass('is-active');
  //   meter.removeClass('is-done');
  // });

  // now do the other button
  var msanchor = $('#ms-anchor');
  var msdownload = $('#ms-download');
  var elm = document.getElementById('ms-download');
  var el = document.getElementById('ms-anchor');

  $('#ms-download').on('click', function(e) {
    console.log("ms download input clicked")

    console.log("clicked state is " + elm.checked);
    if (elm.checked) {
      el.click();
      setTimeout(function() {
        console.log("timedout - uncheck download input")
        elm.checked = false;
      }, 8000);
    }

  });
