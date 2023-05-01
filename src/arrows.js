const myFunction = ()=> "say hello"

console.log(myFunction());

const returnCarModel = () =>(
    {
        model: 'Fusion',
        brand: 'Ford'
    }
)

console.log(returnCarModel());

const car = {
    velocity: 40,
    acceleration: function () {
        this.velocity += 10;
    },
    break: function() {
        this.velocity -= 10;
    }
}

car.break();
car.acceleration();
car.acceleration();


console.log(car.velocity);
