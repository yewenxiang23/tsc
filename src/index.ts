class Animal {
    readonly name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}

var a = new Cat('Jack');
console.log(a.name);
a.name = 'ye';
