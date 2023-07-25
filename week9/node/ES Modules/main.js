
import { foo, boo } from './utils.js';
import Person from './Person.js';

foo(); //should print foo
boo(); //should print boo

const p1 = new Person('John', 'Doe', 30, 'Tel Aviv');
console.log(p1.firstName);