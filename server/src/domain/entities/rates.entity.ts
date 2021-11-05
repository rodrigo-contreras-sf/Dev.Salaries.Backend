import {Seniority} from "../enums/seniority.enum"
import {Language} from "../enums/language.enum"
import shortid from "shortid";
import Technology from "./technology.entity";

class Rate 
{
    private id: string;
    private technology: Technology;
    private seniority:Seniority;
    private language:Language;
    private averageSalary:string;
    private grossMargin:string;
    private currency:string;
    
    constructor(
        technology: Technology,
         seniority:Seniority,
          language:Language,
           averageSalary:string,
            grossMargin:string,
             currency:string
             ) 
        {
        this.id = shortid.generate();
        this.technology = technology;
        this.seniority = seniority;
        this.language = language;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
        this.currency = currency;
    }

    public getId(): string {
        return this.id;
    }
    public getTechnology(): Technology {
        return this.technology;
    }
    public getSeniority(): Seniority {
        return this.seniority;
    }
    public getLanguage(): Language {
        return this.language;
    }
    public getAverage_salary(): string {
        return this.averageSalary;
    }
    public getGross_margin(): string {
        return this.grossMargin;
    }
    public getCurrency(): string {
        return this.currency;
    }
    public setTechnology(technology: Technology) {
        this.technology=technology;
    }
    public setSeniority(seniority: Seniority) {
        this.seniority=seniority;
    }
    public setlanguage(languaje: Language) {
        this.language=languaje;
    }
    public setAverageSalary(average_salary: string) {
        this.averageSalary=average_salary;
    }
    public setGrossMargin(gross_margin: string) {
        this.grossMargin=gross_margin;
    }
    public setCurrency(currency: string) {
        this.currency=currency;
    }

    public Total()
    {
        return parseInt(this.grossMargin) + parseInt(this.averageSalary);
    }
    
    public grossMarginPercentage()
    {
        return parseInt(this.grossMargin) / this.Total();
    }
}
export default Rate;