"use strict";
	(function($){
		var height = $(window).height();
		$(".container").height(height);
		/**
	     * 任意滑动效果
	     */
		$(".box").each(function () {
            $(this).hover(function (e) {
                $(this).find(".move-box").css(position($(this), e)).stop(true, true).animate({
                    "top": "0",
                    "left": "0"
                }, 200);
            }, function (e) {
                var $this = $(this);
                $this.find(".move-box").stop(true, true).animate(position($this, e), 200)
            });
            var $printerDetailInfoNode = $(".move-box");
        });

        function position(elem, e) {
            var w = elem.width();
            var h = elem.height();
            var direction;
            var obj = {};
            var x = (e.pageX - elem.offset().left - (w / 2)) * (w > h ? (h / w) : 1);
            var y = (e.pageY - elem.offset().top - (h / 2)) * (h > w ? (w / h) : 1);
            direction = Math.round(((( Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            switch (direction) {
                case 0:
                {
                    obj.top = "-100%";
                    obj.left = 0;
                    break;
                }
                case 1:
                {
                    obj.top = 0;
                    obj.left = "100%";
                    break;
                }
                case 2:
                {
                    obj.top = "100%";
                    obj.left = 0;
                    break;
                }
                case 3:
                {
                    obj.top = 0;
                    obj.left = "-100%";
                    break;
                }
            }
            return obj;
        }

	})(jQuery);