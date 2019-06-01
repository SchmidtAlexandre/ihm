export class Pokemon {
    name: string;
    id: number;
    
    
    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }


    public toString(){
        return this.name + "," + this.id;
    }
}

