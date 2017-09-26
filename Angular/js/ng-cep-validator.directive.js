app.directive('ngCepValidator', function (CepService, $rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModel) {
            // /^[0-9]{5}-[0-9]{3}$/))
            $scope.$watch($attrs.ngModel, function (value) {
                if (value) {
                    if (value.match(/^[0-9]{5}-[0-9]{3}$/)) {
                        ngModel.$setValidity($attrs.ngModel, true);
                        //Setar como valido
                        CepService.get(value).then(function (response) {
                            $rootScope.$broadcast('cep', response.data)

                        });
                    } else {
                        ngModel.$setValidity($attrs.ngModel, false);
                        //setar como invalido
                    }
                } else {
                    ngModel.$setValidity($attrs.ngModel, false);
                    //setar como invalido
                }
            });
        }
    }
});
