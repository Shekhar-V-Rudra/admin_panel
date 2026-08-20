var options = {

    series: [
        {
            name: "Users",
            data: [4000, 8500, 7200, 11500, 9800, 14200, 16500]
        },
        {
            name: "Agents",
            data: [3000, 7200, 6400, 9800, 8700, 12000, 13800]
        },
        {
            name: "Properties",
            data: [5000, 9600, 8300, 12800, 11100, 15500, 18200]
        },
        {
            name: "Leads",
            data: [2000, 6200, 5400, 8100, 7600, 9800, 12100]
        }
    ],

    chart: {
    type: "line",
    height: 280,
    toolbar: {
        show: false
    },
    zoom: {
        enabled: false
    },
    animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1000
    },
    dropShadow: {
        enabled: false
    }
},

    colors: [
        "#7C3AED",   // Purple
        "#10B981",   // Green
        "#3B82F6",   // Blue
        "#F59E0B"    // Orange
    ],

    stroke: {
    curve: "straight",
    width: 3
},

    markers: {
    size: 5,
    strokeWidth: 3,
    strokeColors: "#fff",
    hover:{
        size:8
    }
},

    dataLabels: {
        enabled: false
    },


    grid: {
    borderColor:"#EEF2F7",
    strokeDashArray:6,
    xaxis:{
        lines:{
            show:false
        }
    },
    yaxis:{
        lines:{
            show:true
        }
    },
    padding:{
        top:20,
        right:10,
        left:10,
        bottom:10
    }
},

    xaxis: {

        categories: [
            "May 1",
            "May 6",
            "May 11",
            "May 16",
            "May 21",
            "May 26",
            "May 31"
        ],

        labels: {
            style: {
                colors: "#94A3B8",
                fontSize: "13px"
            }
        },

        axisBorder: {
            show: false
        },

        axisTicks: {
            show: false
        }

    },

    yaxis: {

        min: 0,
        max: 25000,

        tickAmount: 5,

        labels: {

            formatter: function(value){

                if(value === 0){
                    return "0";
                }

                return (value / 1000) + "K";

            },

            style:{
                colors:"#94A3B8",
                fontSize:"13px"
            }

        }

    },

    tooltip:{
    theme:"light",
    shared:true,
    intersect:false,
    marker:{
        show:true
    }
}

};

var chart = new ApexCharts(
    document.querySelector("#analyticsChart"),
    options
);

chart.render();









new jsVectorMap({

    selector: "#worldMap",

    map: "world",

    zoomButtons: false,

    zoomOnScroll: false,

    regionStyle: {

        initial: {
            fill: "#E5E7EB",
            stroke: "#ffffff",
            strokeWidth: 0.5
        }

    },

    selectedRegions: [
        "AE",
        "SA",
        "IN",
        "GB",
        "QA",
        "US",
        "CA",
        "AU",
        "FR",
        "DE"
    ],

    selectedRegionsStyle: {
        fill: "#5540FD"
    },

    markers: [

        {
            name: "Dubai",
            coords: [25.2048,55.2708]
        },

        {
            name: "Riyadh",
            coords: [24.7136,46.6753]
        },

        {
            name: "Mumbai",
            coords: [19.0760,72.8777]
        },

        {
            name: "London",
            coords: [51.5074,-0.1278]
        },

        {
            name: "Doha",
            coords: [25.2854,51.5310]
        }

    ],

    markerStyle: {

        initial: {

            fill:"#22C55E",
            stroke:"#ffffff",
            strokeWidth:2,
            r:5

        }

    }

});




(function () {
  var container = document.querySelector('.report_graph');
  var tooltip = document.getElementById('reportGraphTooltip');
  var valueEl = tooltip.querySelector('.report_graph__tooltip-value');
  var dateEl = tooltip.querySelector('.report_graph__tooltip-date');
  var dots = container.querySelectorAll('.report_graph__dot');
 
  function showTooltip(e) {
    var dot = e.currentTarget;
    dots.forEach(function (d) { d.classList.remove('is-active'); });
    dot.classList.add('is-active');
 
    var series = dot.getAttribute('data-series');
    var value = dot.getAttribute('data-value');
    var date = dot.getAttribute('data-date');
 
    valueEl.textContent = series + ': ' + value;
    dateEl.textContent = date;
 
    var containerRect = container.getBoundingClientRect();
    var dotRect = dot.getBoundingClientRect();
 
    var left = dotRect.left + dotRect.width / 2 - containerRect.left;
    var top = dotRect.top - containerRect.top;
 
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.classList.add('is-visible');
  }
 
  function hideTooltip(e) {
    e.currentTarget.classList.remove('is-active');
    tooltip.classList.remove('is-visible');
  }
 
  dots.forEach(function (dot) {
    dot.addEventListener('mouseenter', showTooltip);
    dot.addEventListener('mouseleave', hideTooltip);
    dot.addEventListener('touchstart', function (e) {
      e.preventDefault();
      showTooltip(e);
    }, { passive: false });
  });
 
  document.addEventListener('touchstart', function (e) {
    if (!container.contains(e.target)) {
      dots.forEach(function (d) { d.classList.remove('is-active'); });
      tooltip.classList.remove('is-visible');
    }
  });
})();




(function () {
  var container = document.querySelector('.report_bar_graph');
  var tooltip = document.getElementById('reportBarGraphTooltip');
  var valueEl = tooltip.querySelector('.report_bar_graph__tooltip-value');
  var dateEl = tooltip.querySelector('.report_bar_graph__tooltip-date');
  var bars = container.querySelectorAll('.report_bar_graph__bar');
 
  function showTooltip(e) {
    var bar = e.currentTarget;
    bars.forEach(function (b) { b.classList.remove('is-active'); });
    bar.classList.add('is-active');
 
    var series = bar.getAttribute('data-series');
    var value = bar.getAttribute('data-value');
    var date = bar.getAttribute('data-date');
 
    valueEl.textContent = series + ': ' + value;
    dateEl.textContent = date;
 
    var containerRect = container.getBoundingClientRect();
    var barRect = bar.getBoundingClientRect();
 
    var left = barRect.left + barRect.width / 2 - containerRect.left;
    var top = barRect.top - containerRect.top;
 
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.classList.add('is-visible');
  }
 
  function hideTooltip(e) {
    e.currentTarget.classList.remove('is-active');
    tooltip.classList.remove('is-visible');
  }
 
  bars.forEach(function (bar) {
    bar.addEventListener('mouseenter', showTooltip);
    bar.addEventListener('mouseleave', hideTooltip);
    bar.addEventListener('touchstart', function (e) {
      e.preventDefault();
      showTooltip(e);
    }, { passive: false });
  });
 
  document.addEventListener('touchstart', function (e) {
    if (!container.contains(e.target)) {
      bars.forEach(function (b) { b.classList.remove('is-active'); });
      tooltip.classList.remove('is-visible');
    }
  });
})();




(function () {
  var container = document.querySelector('.report_chart_graph_01');
  var svg = document.getElementById('rcg01_svg');
  var tooltip = document.getElementById('rcg01_tooltip');
  var tooltipDate = document.getElementById('rcg01_tooltip_date');
  var tooltipValue = document.getElementById('rcg01_tooltip_value');
  var dots = container.querySelectorAll('.rcg01_dot');
  var activeDot = null;
 
  function showTooltip(dot) {
    if (activeDot) activeDot.classList.remove('is_active');
    activeDot = dot;
    dot.classList.add('is_active');
 
    tooltipDate.textContent = dot.getAttribute('data-date');
    tooltipValue.textContent = dot.getAttribute('data-value');
 
    var cx = parseFloat(dot.getAttribute('cx'));
    var cy = parseFloat(dot.getAttribute('cy'));
    var pt = svg.createSVGPoint();
    pt.x = cx;
    pt.y = cy;
    var screenPt = pt.matrixTransform(svg.getScreenCTM());
    var containerRect = container.getBoundingClientRect();
 
    var left = screenPt.x - containerRect.left;
    var top = screenPt.y - containerRect.top - 10;
 
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.classList.add('is_visible');
  }
 
  function hideTooltip() {
    if (activeDot) activeDot.classList.remove('is_active');
    activeDot = null;
    tooltip.classList.remove('is_visible');
  }
 
  dots.forEach(function (dot) {
    dot.addEventListener('mouseenter', function () { showTooltip(dot); });
    dot.addEventListener('touchstart', function (e) { e.preventDefault(); showTooltip(dot); });
  });
 
  container.addEventListener('mouseleave', hideTooltip);
  document.addEventListener('touchstart', function (e) {
    if (!container.contains(e.target)) hideTooltip();
  });
})();












