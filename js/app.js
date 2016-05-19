//$(document).on('DOMContentLoaded', function() {
//  var box = $('#box');
//  console.log('box ready', box);
//  TweenLite.to(box, 3, { x: 600 });
//  TweenLite.to(box, 2, {top:300 });
//  TweenLite.to(box, 2, { opacity:0 });
//});

document.addEventListener('DOMContentLoaded', function() {
  var box = document.getElementById('box');
  TweenLite.to(box, 3, { x: 600 });
  console.log('animating maybe', box);
})
