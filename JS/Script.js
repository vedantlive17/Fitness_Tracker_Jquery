window.onload = function() {
    var delayTime = 100; 

    setTimeout(function() {
        var gifImage = document.getElementById('gifImage');
        var currentTime = new Date().getTime();
        gifImage.src = "./Images/code-animation.gif?time=" + currentTime;
        gifImage.classList.add('gif-animation');
    }, delayTime);
};