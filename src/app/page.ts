export class Generic {
  constructor(public id: number) {}
}

export class Page<T extends Generic> {
  constructor(
    public records: T,
    public prop1: string,
    public prop2: string
  ) {}
  get className() {
    return this.constructor.name;
  }
}

export class Person extends Generic {
  constructor(id: number, public name: string) {
    super(id);
  }
}

export class PersonPage extends Page<Person> {
  
}
