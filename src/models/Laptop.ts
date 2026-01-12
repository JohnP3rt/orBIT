import {Asset} from './Asset';

export class Laptop extends Asset{
    public brand: string;
    public cpu: string;
    public ram: number;

    constructor(serialNumber: string, brand: string, cpu: string, ram: number){
        super(serialNumber);
        this.brand = brand;
        this.cpu = cpu;
        this.ram = ram;
    }

    public runDiagnostics(): void{
        console.log(`Brand: ${this.brand} Laptop ${this.serialNumber}...`)
        console.log(`CPU: ${this.cpu} - OK`);
        console.log(`RAM: ${this.ram} GB - OK`);
        console.log(`System Status: ${this.status}`);
    }

}