app.controller('ContactController', ['$scope', function($scope){
    // Icon links and information
    $scope.links = [
        {
            "icon": "fa fa-facebook-official",
            "link": "https://www.facebook.com/cornopaez"
        },
        {
            "icon": "fa fa-twitter-square",
            "link": "https://www.twitter.com/cornopaez"
        },
        {
            "icon": "fa fa-linkedin",
            "link": "https://www.linkedin.com/in/cornopaez"
        },
        {
            "icon": "fa fa-angellist",
            "link": "https://angel.co/jose-mauricio-paez"
        }
    ];

    // reCaptcha information
	$scope.response = null;
    $scope.widgetId = null;
    // $scope.model = {
    //     key: '6LfqQyQUAAAAAFySY1Hde5_whqMyA7kpcvQiYkO6'
    // };
    $scope.setResponse = function (response) {
        console.info('Response available');
        $scope.response = response;
    };
    $scope.setWidgetId = function (widgetId) {
        console.info('Created widget ID: %s', widgetId);
        $scope.widgetId = widgetId;
    };
    $scope.cbExpiration = function() {
        console.info('Captcha expired. Resetting response object');
        vcRecaptchaService.reload($scope.widgetId);
        $scope.response = null;
     };
    // $scope.submit = function () {
    //     var valid;
    //     /**
    //      * SERVER SIDE VALIDATION
    //      *
    //      * You need to implement your server side validation here.
    //      * Send the reCaptcha response to the server and use some of the server side APIs to validate it
    //      * See https://developers.google.com/recaptcha/docs/verify
    //      */
    //     console.log('sending the captcha response to the server', $scope.response);
    //     if (valid) {
    //         console.log('Success');
    //     } else {
    //         console.log('Failed validation');
    //         // In case of a failed validation you need to reload the captcha
    //         // because each response can be checked just once
    //         vcRecaptchaService.reload($scope.widgetId);
    //     }
    // }
}])