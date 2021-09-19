window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1"
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Recent Sales per Month"
    },
    axisX: {
      margin: 10,
      labelPlacement: "inside",
      tickPlacement: "inside"
    },
    axisY2: {
      title: "Sales (in thousands Php)",
      titleFontSize: 14,
      includeZero: true,
      suffix: "k Php"
    },
    data: [{
      type: "line",
      axisYType: "secondary",
      yValueFormatString: "#,###.##k Php",
      indexLabel: "{y}",
      dataPoints: [
        { label: "January", y: 105 },
        { label: "February", y: 205 },
        { label: "March", y: 350 },
        { label: "April", y: 450 },
  
      ]
    }]
  });

  setTimeout(function() {
    chart.render();
  }, 1000)
  
    
  }




  