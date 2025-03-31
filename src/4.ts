// class Key
class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

// class Person
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  public getKey(): Key {
    return this.key;
  }
}

// class House
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[];
  comeIn(person: Person): void {
    this.door ?? this.tenants.push(person);
  }
  abstract openDoor(key: Key): void;
}

// class MyHouse
class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

// run
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);

export {};
