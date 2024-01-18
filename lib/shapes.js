//Parent class for shapes. 
// {circle, triangle, square} classes will inherit these properties
class Shapes {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}
// class for circle that inherits shapes properties and adds render method for the specified shape (class) 
class Circle extends Shapes {
    render() {
        return `<svg> version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${this.color}"/><text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};
// class for square that inherits shapes properties and adds render method for the specified shape (class)
class Square extends Shapes {
    render() {
        return `<svg> version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="${this.color}"/><text x="50" y="60" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};
// class for triangle that inherits shapes properties and adds render method for the specified shape (class) 
class Triangle extends Shapes {
    render() {
        return `<svg> version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,100 50,0 ,100 100" fill="${this.color}"/><text x="50" y="90" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};
// export classes(modules) so they are accessible in app.js
module.exports = {Circle, Square, Triangle};