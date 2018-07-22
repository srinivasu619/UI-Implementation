function setAttributes(sessionLength, breakLength) {
    $("#val").text(sessionLength + ":00");
    $("#sessionLength").html(sessionLength);
    $("#breakLength").html(breakLength);
}
$(document).ready(function () {
    var sessionLength = 25;
    var breakLength = 10;
    setAttributes(sessionLength, breakLength);
    var currentSession = sessionLength * 60;
    var breakSession = breakLength * 60;
    var started = false;
    var breakL = false;
    var session = window.setInterval(function () {
        if (started) {
            currentSession--;
            $("#val").text(Math.floor(currentSession / 60) + ":" + currentSession % 60);
            if (currentSession == 0) {
                started = false;
                breakL = true;
                $("#sessionName").text('Break Session');
            }
        }
    }, 1000);
    var breakSess = window.setInterval(function () {
        if (breakL) {
            breakSession--;
            $("#val").text(Math.floor(breakSession / 60) + ":" + breakSession % 60);
            if (breakSession == 0) {
                started = false;
                breakL = false;
                setAttributes();
                $("#sessionName").text('Current Session');
                $("#play").html('<i class="fas fa-play"></i>');
            }
        }
    }, 1000);
    $("#decSession").click(function () {
        console.log(" decrease session length");
        if (sessionLength >= 20 && !started) {
            sessionLength -= 5;
            currentSession = sessionLength * 60;
            console.log(currentSession);
            $("#sessionLength").html(sessionLength);
            $("#val").text(sessionLength + ":00");
        }
    });
    $("#incSession").click(function () {
        console.log(" increase session length");
        if (sessionLength <= 45 && !started) {
            sessionLength += 5;
            currentSession = sessionLength * 60;
            $("#sessionLength").html(sessionLength);
            $("#val").text(sessionLength + ":00");
        }
    });
    $("#decBreak").click(function () {
        console.log(" decrease break length");
        if (breakLength >= 10 && !started) {
            breakLength -= 5;
            breakSession = breakLength * 60;
            $("#breakLength").html(breakLength);
        }
    });
    $("#incBreak").click(function () {
        console.log(" increase session length");
        if (breakLength <= 15 && !started) {
            breakLength += 5;
            breakSession = breakLength * 60;
            $("#breakLength").html(breakLength);
        }
    });
    $("#play").click(function () {
        if (!started) {
            started = !started;
            $("#play").html('<i class="fas fa-pause"></i>');
        } else {
            started = !started;
            $("#play").html('<i class="fas fa-play"></i>');
        }
    });
    $("#reset").click(function () {
        console.log("RESET")
        started = false;
        breakL = false;
        sessionLength = 25;
        breakLength = 10;
        currentSession = sessionLength * 60;
        breakSession = breakLength * 60;
        setAttributes(25, 10);
        $("#sessionName").text('Current Session');
        $("#play").html('<i class="fas fa-play"></i>');
    });
});