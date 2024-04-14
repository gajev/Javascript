function Cat(array) {
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    array.forEach(current_cat => {
        catAsArray = current_cat.split(" ")
        const cat = new Cat(catAsArray[0], catAsArray[1]);
        cat.meow()
    });
}

Cat(['Mellow 2', 'Tom 5'])
Cat(['Candy 1', 'Poppy 3', 'Nyx 2'])