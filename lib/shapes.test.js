// import shapes mosules 
const {Circle, Square, Triangle} = require('./shapes');

describe('circle', () => {
    it('Should make a circle with specified shape color, text, and text color', () => {
        const testCircle = `<svg> version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="GREEN"/><text x="150" y="115" font-size="45" text-anchor="middle" fill="WHITE">SVG</text></svg>`;
        const circle = new Circle('GREEN', 'SVG', 'WHITE');
        
        expect(circle.render()).toEqual(testCircle);
    });
});

describe('square', () => {
    it('Should make a square with specified shape color, text, and text color', () => {
        const testSquare = `<svg> version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="YELLOW"/><text x="50" y="60" font-size="40" text-anchor="middle" fill="MAROON">ASU</text></svg>`;
        const square = new Square('YELLOW', 'ASU', 'MAROON');

        expect(square.render()).toEqual(testSquare);
    });
});

describe('triangle', () => {
    it('Should make a triangle with specified shape color, text, and text color', () => {
        const testTriangle = `<svg> version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polyline points="0,100 50,0 ,100 100" fill="YELLOW"/><text x="50" y="90" font-size="30" text-anchor="middle" fill="GREEN">PMR</text></svg>`;
        const triangle = new Triangle('YELLOW', 'PMR', 'GREEN');

        expect(triangle.render()).toEqual(testTriangle);
    });
});
