// function findCenter ($this) {
//   var offset = $this.offset();
//   var width = $this.width();
//   var height = $this.height();
//    IDs = {
//     x: offset.left + (width / 2),
//     y: offset.top + (height / 2)
//   };
//   console.log(offset);
//   return IDs;
// }


// var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
//     var el = document.querySelector('.icon-plain-small'),
// 	elSpan = el.querySelector('span'),
// 	// mo.js timeline obj
// 	timeline = new mojs.Timeline(),

// 	// tweens for the animation:

// 	// burst animation
// 	tween1 = new mojs.Burst({
// 		parent: el,
// 		duration: 1500,
// 		shape : 'circle',
// 		fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
// 		opacity: 0.6,
// 		childOptions: { radius: {20:0} },
// 		radius: {40:120},
// 		count: 6,
// 		isSwirl: true,
// 		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
// 	}),
// 	// ring animation
// 	tween2 = new mojs.Transit({
// 		parent: el,
// 		duration: 750,
// 		type: 'circle',
// 		radius: {0: 50},
// 		fill: 'transparent',
// 		stroke: '#988ADE',
// 		strokeWidth: {15:0},
// 		opacity: 0.6,
// 		easing: mojs.easing.bezier(0, 1, 0.5, 1)
// 	}),
// 	// icon scale animation
// 	tween3 = new mojs.Tween({
// 		duration : 900,
// 		onUpdate: function(progress) {
// 			var scaleProgress = scaleCurve(progress);
// 			elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
// 		}
// 	});

// // add tweens to timeline:
// timeline.add(tween1);

// // when clicking the button start the timeline/animation:
// // el.addEventListener('mouseenter', function() {
// // 	timeline.replay();
// // });


// $( ".icon-plain-small" ).on( "mouseenter", function() {
//   aniPos = findCenter($(this));
//   timeline.replay();

// }



$(document).ready(function () {
	var myTimeline = new mojs.Timeline();
	var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');

	var myAnimation1 = new mojs.Burst({
		duration: 1500,
		shape: 'circle',
		fill: ['#e67e22', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
		top: 0,
		left: 0,
		opacity: 0.8,
		childOptions: { radius: { 200: 0 } },
		radius: { 40: 120 },
		angle: { 0: 180 },
		count: 8,
		isSwirl: true,
		isRunLess: true,
		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
	});

	var myAnimation2 = new mojs.Transit({
		duration: 750,
		type: 'circle',
		radius: { 0: 50 },
		fill: 'transparent',
		top: 0,
		left: 0,
		stroke: '#a277ff',
		strokeWidth: { 15: 0 },
		opacity: 0.6,
		isRunLess: true,
		easing: mojs.easing.bezier(0, 1, 0.5, 1)
	});

	myTimeline.add(myAnimation1, myAnimation2);

	$(".animate-burst").on("mouseenter", function () {
		elSpan = this.querySelector('span')
		aniPos = findCenter($(this));
		myAnimation1.tune({ top: aniPos.y, left: aniPos.x });
		myAnimation2.tune({ top: aniPos.y, left: aniPos.x });
		myTimeline.replay();

		new mojs.Tween({
			duration: 900,
			onUpdate: function (progress) {
				if (progress > 0.3) {
					var scaleProgress = scaleCurve(progress);
					elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
					elSpan.style.WebkitTransform = elSpan.style.color = '#a277ff';
				} else {
					elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(0,0,1)';
					elSpan.style.WebkitTransform = elSpan.style.color = 'rgba(0,0,0,0.3)';
				}
			}
		}).play();

	});

	$(".animate-burst").on("touchstart", function () {
		elSpan = this.querySelector('span')
		aniPos = findCenter($(this));
		myAnimation1.tune({ top: aniPos.y, left: aniPos.x });
		myAnimation2.tune({ top: aniPos.y, left: aniPos.x });
		myTimeline.replay();

		new mojs.Tween({
			duration: 900,
			onUpdate: function (progress) {
				if (progress > 0.3) {
					var scaleProgress = scaleCurve(progress);
					elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
					elSpan.style.WebkitTransform = elSpan.style.color = '#a277ff';
				} else {
					elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(0,0,1)';
					elSpan.style.WebkitTransform = elSpan.style.color = 'rgba(0,0,0,0.3)';
				}
			}
		}).play();

	});

	$(".animate-burst").on("mouseout", function () {
		elSpan = this.querySelector('span')
		aniPos = findCenter($(this));
		myTimeline.replay();


		new mojs.Tween({
			duration: 900,
			onUpdate: function () {
				elSpan.style.WebkitTransform = elSpan.style.color = '#000';
			}
		}).play();

	});

	$(".animate-burst").on("touchend", function () {
		elSpan = this.querySelector('span')
		aniPos = findCenter($(this));
		myTimeline.replay();


		new mojs.Tween({
			duration: 900,
			onUpdate: function () {
				elSpan.style.WebkitTransform = elSpan.style.color = '#000';
			}
		}).play();

	});

	function findCenter($this) {
		var offset = $this.offset();
		var width = $this.width();
		var height = $this.height();
		Pos = {
			x: offset.left + (width / 2),
			y: offset.top + (height / 2)
		};
		return Pos;
	}
});
