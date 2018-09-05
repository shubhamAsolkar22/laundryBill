var mainModule = angular.module('scorecard',["ngRoute"]);

mainModule.controller('scorecardController',function($scope){
        $scope.appname = 'My Press';
    }    
);

mainModule.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "./partials/home.html",
        controller : "homecontroller"
    })
    .when("/bills", {
        templateUrl : "./partials/bills.html",
        controller : "billController"
    });
});

mainModule.controller('homecontroller',function($scope){
    
        $scope.date = new Date();
        var todaysTotal = $scope.shirts + $scope.pants +$scope.dresses;
    }
);

mainModule.factory('laundaryHistory',function(){
    var factory={};
    var historyByDay = [
        {date:new Date(2018,7,1) , shirts:1, pants:2 , dresses:4},
        {date:new Date(2018,7,8) , shirts:1, pants:5 , dresses:3},
        {date:new Date(2018,6,8) , shirts:1, pants:5 , dresses:3}
    ];

    factory.getHistoryByDay = function(){ return historyByDay; }
    return factory;
});

mainModule.controller('laundaryHistorycontroller',function($scope, laundaryHistory){
    $scope.history = laundaryHistory.getHistoryByDay();
});

mainModule.controller('billController', function($scope, laundaryHistory){
    $scope.historyByDay = laundaryHistory.getHistoryByDay();
    $scope.monthSummary= [{month:"Dec", shirts:12,pants:3,dresses:7}];

    }
);

