class Color {//class name with every first letter upper case (ex. GetColorCode)
    constructor(r, g, b, name) {//the constructor will run as creating a new instance with this class
        this.r = r;
        //"this" will refer to the object which new operator creates later
        this.g = g;
        this.b = b;
        this.name = name;
    }

    //add methods(like function) to the prototype
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

}

const red = new Color(200, 20, 20, 'red'); //create a new object with the class
const blue = new Color(50, 50, 230, 'blue');

document.body.style.backgroundColor = blue.rgb();
//change backgroundcolor to blue

red.r === blue.r && console.log('red.r === blue.r');
//false

red.rgb === blue.rgb && console.log('red.rgb === blue.rgb');
//true