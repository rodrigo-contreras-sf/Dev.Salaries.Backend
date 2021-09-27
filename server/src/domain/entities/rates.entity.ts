import { Seniority } from "../enums/seniority.enum"
import { Language } from "../enums/language.enum"
import shortid from "shortid";
//import RateRoutes from "../../http/routes/rates.routes";

class Rate 
{
    private id: string;
    private technology: number;
    private seniority: Seniority;
    private language: Language;
    private averageSalary: string;
    private grossMargin: string;
    private currency: string;
    
    constructor(
        technology: number,
        seniority: Seniority,
        language: Language,
        averageSalary: string,
        grossMargin: string,
        currency: string
        ){
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
    public getTechnology(): number {
        return this.technology;
    }
    public getSeniority(): Seniority {
        return this.seniority;
    }
    public getLanguage(): Language {
        return this.language;
    }
    public getAverageSalary(): string {
        return this.averageSalary;
    }
    public getGrossMargin(): string {
        return this.grossMargin;
    }
    public getCurrency(): string {
        return this.currency;
    }
    public setTechnology(technology: number) {
        this.technology = technology;
    }
    public setSeniority(seniority: Seniority) {
        this.seniority = seniority;
    }
    public setlanguaje(languaje: Language) {
        this.language = languaje;
    }
    public setAverageSalary(averageSalary: string) {
        this.averageSalary = averageSalary;
    }
    public setGrossMargin(grossMargin: string) {
        this.grossMargin = grossMargin;
    }
    public setCurrency(currency: string) {
        this.currency = currency;
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