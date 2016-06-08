/**
 * ì«Ç›çûÇ›èàóù
 */
$(function(){
	var self = this;

	/**
	 * CANVAS APIóp
	 */
	(function(){
		var image;
		var canvas = document.getElementById('CANVAS_CNVASAPI');
		var context;
		var cnt = 0;

		/**
		 * èâä˙âª
		 */
		var init = function(){
			if(canvas && typeof(canvas.getContext) === 'function') {
				context = canvas.getContext('2d');
				var img = new Image();
				img.src = 'res/img.png';
				img.onload = function(){
					image = img;
					setInterval(tick, 1000/30);
				};

				var $messageBox = $("div#CANVAS_CNVASAPI");
				var $mes = $messageBox.find('h2.message_active');
				$mes.text($mes.text() + '. inited.');
			}
		};

		/**
		 * tick
		 */
		var tick= function(){
			if(context){
				//update
				cnt++;
				cnt %= 100;
				if(image) {
					//render
					context.drawImage(image, (Math.floor(cnt % 10) * 16), (Math.floor(cnt / 10) * 12), 16, 12, 0, 0, 800, 600);
				}
			}
		}

		init();
	})();

	/**
	 * WEB GLóp
	 */
	(function(){
		/**
		 * èâä˙âª
		 */
		var init = function(){
			var $messageBox = $("div#ANIM_CANVAS_WEBGL");
			var $mes = $messageBox.find('h2.message_active');
			$mes.text($mes.text() + '. inited.');
		};

		init();
	})();
})