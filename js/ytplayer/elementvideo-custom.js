var myPlayer;
        jQuery(function () {
            var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};
            myPlayer = jQuery("#video").YTPlayer();
        });