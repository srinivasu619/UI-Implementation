 var bar = new ProgressBar.Circle(mainmeter, {
                    strokeWidth: 10,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#d0feb0',
                    trailColor: '#595959',
                    trailWidth: 8,
                    svgStyle: null
                    });
bar.setText('&nbsp;&nbsp;&nbsp;&nbsp;3039 <br> Your Goal');
bar.text.style.fontFamily = '"Athiti", sans-serif';
bar.text.style.fontSize = '1rem';
bar.text.style.color='#fff';
bar.animate(2292/3039); 
 var bar1 = new ProgressBar.Circle(protien, {
                    strokeWidth: 10,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#b0f9f7',
                    trailColor: '#4d4d4d',
                    trailWidth: 9,
                    svgStyle: null
                    });
bar1.animate(61/131); 
var bar2 = new ProgressBar.Circle(carbs, {
                    strokeWidth: 10,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#f7bfa4',
                    trailColor: '#4d4d4d',
                    trailWidth: 9,
                    svgStyle: null
                    });
bar2.animate(129/525); 