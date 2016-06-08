function plotCities(cityData, labels) {
  $(".cities").html("");
  var cityPositions = numeric.transpose(mds.classic(cityData));
      
  var w = Math.min(720, document.documentElement.clientWidth - 20), 
      h = w /2, padding = 35;

  mds.drawD3ScatterPlot(d3.select(".cities"),
      cityPositions[0],
      cityPositions[1],
      labels,
      {
          w :  Math.min(720, document.documentElement.clientWidth - 20),
          h : w /2,
          padding : 37,
          reverseX : true,
          reverseY : true,
      });

}