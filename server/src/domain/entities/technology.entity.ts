import shortid from "shortid";

class Technology 
{
    private name: string;
    private id: string;
    
    constructor( name: string) {
        this.id = shortid.generate();
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name=name;
    }

}
export default Technology ;

