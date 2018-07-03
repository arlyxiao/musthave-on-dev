(function (window, document, $) {
    'use strict';

    $(document).ready(function () {
        var DropDown = function(el) {
            this.dd = el;
            this.initEvents();

            return el;
        };

        DropDown.prototype = {
            initEvents: function() {
                var obj = this;

                obj.dd.on('click', function(event){
                    $(this).toggleClass('active');
                    event.stopPropagation();
                });
            }
        };

        window.mhForm = {
            DropDown: DropDown
        };
    });

})(window, document, jQuery);
