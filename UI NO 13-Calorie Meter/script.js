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
bar.text.style.color='#000';
bar.animate(0.68); 
 var bar1 = new ProgressBar.Circle(protien, {
                    strokeWidth: 5,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: 'red',
                    trailColor: '#595959',
                    trailWidth: 4,
                    svgStyle: null
                    });
bar1.animate(0.68); 
var bar2 = new ProgressBar.Circle(carbs, {
                    strokeWidth: 5,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: 'red',
                    trailColor: '#595959',
                    trailWidth: 4,
                    svgStyle: null
                    });
bar2.animate(0.68); 