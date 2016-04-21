(function () {
    "use strict";

    const element = document.querySelector('.element');
    let scaleRatio = 1;

    function generateRandomColor(){
        let color = "#";
        const letters = '0123456789abcdef';

        for(let i = 1; i <= 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }


    function rescale(element){
        scaleRatio *= 2;
        element.style.transform = `scale(${scaleRatio}, ${scaleRatio})`
    }

    function move(previousPosition, step){
        let nextPosition = '';
        nextPosition = +previousPosition.substr(0, previousPosition.length - 2) + step + 'px';
        return nextPosition;
    }

    
    //Handling keypresses
    window.addEventListener('keydown', event => {
        switch (event.keyCode){
            case 38: //top
                element.style.top = move(element.style.top, -100);
                break;
            case 39: //right
                element.style.left = move(element.style.left, 100);
                break;
            case 40: //bottom
                element.style.top = move(element.style.top, 100);
                break;
            case 37: //left
                element.style.left = move(element.style.left, -100);
                break;
            default:
                console.log("Ooops! Use arrows to control the element!");
        }
    });

    element.addEventListener('click', () => {
        element.style.backgroundColor = generateRandomColor();
    });

    element.addEventListener('dblclick', () => {
        console.log('db triggers');
        rescale(element, 1);
    })

}());