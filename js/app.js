$(document).on('DOMContentLoaded', function() {
  // Animate the box to 600px to the right in 3 seconds
  var animationOptions = {
    x: 600,
    onComplete: function() {
      TweenLite.to('.box', 3, { y: 200, rotation: '+=720', scaleX: '0.5', scaleY: '0.5' });
    }
  }
  TweenLite.to('.box', 1, animationOptions);

  var timeLine = new TimelineLite();
  timeLine.add( TweenLite.to('.box', 2, { left: 300 }));
  timeLine.add( TweenLite.to('.box', 2, { top: 50 }));
  timeLine.add( TweenLite.to('.box', 2, { opacity: 0.2 }));
  timeLine.add( TweenLite.to('.box', 2, { opacity: 1 }));
  timeLine.add( TweenLite.to('.box', 2, { rotation: '+=360' }));

  timeLine.pause();

  var button = $('#start-stop');
  button.on('click', function() {
    if (this.playing) {
      timeLine.pause();
    } else {
      timeLine.resume();
    }
    this.playing = !this.playing;
  });
});
