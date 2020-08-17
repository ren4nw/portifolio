const squares = document.querySelectorAll('.skill-square');
const squaresLength = squares.length

const effect = (square, time = 2000) => {
    return new Promise((resolve) => {
        square.style.transform = 'translateY(-15px) scale(1)';
        square.style.opacity = '1';
    
        setTimeout(() => {
            square.style.transform = 'translateY(0px) scale(.9)';
            square.style.opacity = '.9';
            
            resolve()
        }, time)
    })
}

const moveSquare = (i) => {
    if (i >= squaresLength) {
        i = 0;
    }

    const square = squares[i];
    
    effect(square, 2000).then(() => moveSquare(i+1));
}

// moveSquare(0)

const addEffects = () => {
    if (window.innerWidth > 425) {
        return moveSquare(0);
    }

    window.addEventListener('scroll', () => {

        document.querySelectorAll('.skill-square').forEach(square => {
            const bounds = square.getBoundingClientRect();
            const squareY = bounds.y - 100;
    
            if (squareY <= 0) {
                return effect(square);
            }
        });
    });
}

addEffects()