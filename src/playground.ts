import {Laptop} from './models/Laptop';

console.log("Simulate");

const myLaptop = new Laptop("SN-Laptop", "Dell XPS", "Intel i7", 16);

myLaptop.runDiagnostics();

console.log("Attempt Assignment 1");
myLaptop.assignToUser("johnpert@nexus.com");

console.log("A user drop the laptop");
myLaptop.reportIssue();

console.log("Attempting Assignment 2");
myLaptop.assignToUser("honaki@nexus.com");