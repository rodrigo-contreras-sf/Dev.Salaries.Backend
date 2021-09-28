//import { Seniority } from "../../../domain/enums/seniority.enum"
//import { Language } from "../../../domain/enums/language.enum"

class UpdateRateCommand {
    private id: string;
    //private technology: number;
    //private seniority: Seniority;
    //private language: Language;
    private averageSalary: string;
    private grossMargin: string;
    //private currency: string;

    constructor(
        id: string,
        //technology: number,
        //seniority: Seniority,
        //language: Language,
        averageSalary: string,
        grossMargin: string,
        //currency: string
        )
    {
        this.id = id;
        //this.technology = technology;
        //this.seniority = seniority;
        //this.language = language;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
        //this.currency = currency;
    }
    public getId(): string {
        return this.id;
    }
    /*
    public getTechnology(): number {
        return this.technology;
    }
    public getSeniority(): Seniority {
        return this.seniority;
    }
    public getLanguage(): Language {
        return this.language;
    }
    */
    public getAverageSalary(): string {
        return this.averageSalary;
    }
    public getGrossMargin(): string {
        return this.grossMargin;
    }
    /*
    public getCurrency(): string {
        return this.currency;
    }
    */
}

export default UpdateRateCommand