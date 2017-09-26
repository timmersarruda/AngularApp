app.directive('ngBlur', function () {
    return {
        restrict: 'A',
        require: 'ng-model',
        link: function ($escope, $element, $attrs, ngmodel) {
            $element.on('blur', function () {
                if (ngmodel.$invalid) {
                    $element.addClass('error');
                } else {
                    $element.removeClass('error');
                }
            });
        }
    }
});
