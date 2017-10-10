var progressbaroptions1 = {
    color: '#81a4e3',
    strokeWidth: 7,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#81a4e3',
        width: 7
    },
    to: {
        color: '#81a4e3',
        width: 7
    },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + '%');
        }

    }
}
var progressbaroptions2 = {
    color: '#e85f71',
    strokeWidth: 7,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#e85f71',
        width: 7
    },
    to: {
        color: '#e85f71',
        width: 7
    },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + '%');
        }

    }
}
$(document).ready(function () {
    literacy(litMale,0.91);
    illiteracy(illMale, 0.09);
    literacy(litFemale,0.86);
    illiteracy(illFemale, 0.14);
    literacy(litUr,0.91);
    illiteracy(illUr, 0.09);
    literacy(litRu,0.86);
    illiteracy(illRu, 0.14);
});
function literacy(id, data) {
    var bar = new ProgressBar.Circle(id, progressbaroptions1);
    bar.text.style.fontFamily = '"Abel", Helvetica, sans-serif';
    bar.text.style.fontSize = '14px';
    bar.text.style.letterSpacing = '1px';
    bar.animate(data);
}

function illiteracy(id, data) {
    var bar = new ProgressBar.Circle(id, progressbaroptions2);
    bar.text.style.fontFamily = '"Abel", Helvetica, sans-serif';
    bar.text.style.fontSize = '14px';
    bar.text.style.letterSpacing = '1px';
    bar.animate(data);
}