var sample=angular.module("sample", []);
sample.controller("myctrl", function($scope, $http)
{
    $http.get('emp.json')
    .success(function(response)
    {
        $scope.entry=response.data;
        $scope.limit=6;
    });
    
});

sample.filter("Age", function () { return function (Age) {
    if(Age<35)
    {
        return "junior";
    }
    else{
        return "senior";
    }
    }});


