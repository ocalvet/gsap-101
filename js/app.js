$(document).on('DOMContentLoaded', function() {
  // Animate the box to 600px to the right in 3 seconds
  var animationOptions = {
    x: 600,
    onComplete: function() {
      TweenLite.to('.box', 3, { y: 200, rotation: '+=360' });
    }
  }
  TweenLite.to('.box', 1, animationOptions);
});
