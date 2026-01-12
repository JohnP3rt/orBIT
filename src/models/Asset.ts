export type AssetStatus = 'Active' | 'Processing' | 'Broken' | 'Retired';

export class Asset {
    public serialNumber: string;
    public status: AssetStatus;
    public assignedTo: string | null;

    constructor(serialNumber: string){
        this.serialNumber = serialNumber;
        this.status = 'Active';
        this.assignedTo = null;
    }

    public assignToUser(userEmail: string): void{
        if(this.status == 'Broken' || this.status === 'Retired'){
            console.log(`Cannot assign asset ${this.serialNumber} - ${this.status}`);
            return;
        }

        this.assignedTo = userEmail;
        console.log(`Asset ${this.serialNumber} assigned to ${userEmail}.`);
    } 

    public reportIssue(): void{
        this.status = 'Broken';
        console.log(`Asset ${this.serialNumber} is Broken.`);
    }
}


