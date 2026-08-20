(function () {
  var container = document.querySelector('.analytics_graph_01');
  var svg = document.getElementById('ag01_svg');
  var tooltip = document.getElementById('ag01_tooltip');
  var tooltipDate = document.getElementById('ag01_tooltip_date');
  var tooltipValue = document.getElementById('ag01_tooltip_value');
  var dots = container.querySelectorAll('.ag01_dot');
  var activeDot = null;
 
  function showTooltip(dot) {
    if (activeDot) activeDot.classList.remove('is_active');
    activeDot = dot;
    dot.classList.add('is_active');
 
    var series = dot.getAttribute('data-series');
    tooltipDate.textContent = dot.getAttribute('data-date');
    tooltipValue.textContent = dot.getAttribute('data-value');
    tooltipValue.className = 'ag01_tooltip_value ' + (series === 'blue' ? 'is_blue' : 'is_gray');
 
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





(function () {
  var container = document.querySelector('.anslytics_bar_graph_01');
  var svg = document.getElementById('abg01_svg');
  var tooltip = document.getElementById('abg01_tooltip');
  var tooltipDate = document.getElementById('abg01_tooltip_date');
  var tooltipValue = document.getElementById('abg01_tooltip_value');
  var bars = container.querySelectorAll('.abg01_bar');
  var activeBar = null;
 
  function showTooltip(bar) {
    if (activeBar) activeBar.classList.remove('is_active');
    activeBar = bar;
    bar.classList.add('is_active');
 
    tooltipDate.textContent = bar.getAttribute('data-date') + ' \u2014 ' + bar.getAttribute('data-series');
    tooltipValue.textContent = bar.getAttribute('data-value');
 
    var x = parseFloat(bar.getAttribute('x'));
    var y = parseFloat(bar.getAttribute('y'));
    var w = parseFloat(bar.getAttribute('width'));
    var pt = svg.createSVGPoint();
    pt.x = x + w / 2;
    pt.y = y;
    var screenPt = pt.matrixTransform(svg.getScreenCTM());
    var containerRect = container.getBoundingClientRect();
 
    var left = screenPt.x - containerRect.left;
    var top = screenPt.y - containerRect.top - 10;
 
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.classList.add('is_visible');
  }
 
  function hideTooltip() {
    if (activeBar) activeBar.classList.remove('is_active');
    activeBar = null;
    tooltip.classList.remove('is_visible');
  }
 
  bars.forEach(function (bar) {
    bar.addEventListener('mouseenter', function () { showTooltip(bar); });
    bar.addEventListener('touchstart', function (e) { e.preventDefault(); showTooltip(bar); });
  });
 
  container.addEventListener('mouseleave', hideTooltip);
  document.addEventListener('touchstart', function (e) {
    if (!container.contains(e.target)) hideTooltip();
  });
})();