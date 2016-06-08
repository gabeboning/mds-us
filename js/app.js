'use strict';

var printMatrix = function(m) {
  for(var i = 0; i < m.length; i++) {
    console.log(_.join(m[i]));
  }
};

var createEmptyMatrix = function(rows,cols) {
  var m = [];
  for(var i = 0; i < rows; i++) {
    var r = [];
    for(var j=0; j < cols; j++) {
      r.push(0);
    }
    m.push(r);
  }
  return m;
}

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.controller('InputCtrl', function($scope) {
  var allCities = ['Seattle', 'New York', 'Chicago', 'Atlanta', 'Houston', 'Denver', 'Salt Lake', 'SF', 'Miami', 'LA'];
  
  var cityPairs = [];
  
  for(var i = 0; i < allCities.length; i++) {
    for(var j=0; j<i; j++) {
      cityPairs.push({distance: 0, cities: [allCities[i], allCities[j]]});
    }
  }
  
  var prepCityData = function() {
    var m = createEmptyMatrix(allCities.length, allCities.length);
    
    var c = 0;
    for(var i = 0; i < allCities.length; i++) {
      for(var j=0; j<i; j++) {
        m[i][j] = $scope.cityPairs[c++].distance;
        m[j][i] = m[i][j];
      }
    }
    
    printMatrix(m);
    return m;
  };
  
  $scope.done = function() {
    var cityDists = prepCityData();
    console.log(mds.classic(cityDists));
    plotCities(cityDists, allCities);
    
  };
  
  $scope.cityPairs = cityPairs;
  
});
