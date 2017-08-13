var bar = new ProgressBar.Line(usedPercent, {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#8c86c0',
  trailColor: '#ecf0f1',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%',borderRadius:'0.5em'}
});

bar.animate(0.692);  