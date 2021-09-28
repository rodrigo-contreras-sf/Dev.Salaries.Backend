import {Seniority} from "../enums/seniority.enum"
import {Language} from "../enums/language.enum"
import shortid from "shortid";
//import RateRoutes from "../../http/routes/rates.routes";
class Rate 
{
    private id: string;
    private technology: number;
    private seniority:Seniority;
    private languaje:Language;
    private averageSalary:string;
    private grossMargin:string;
    private currency:string;
    

    constructor(
        technology: number,
         seniority:Seniority,
          languaje:Language,
           averageSalary:string,
            grossMargin:string,
             currency:string
             ) 
        {
        this.id = shortid.generate();
        this.technology = technology;
        this.seniority = seniority;
        this.languaje = languaje;
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
    public getLanguaje(): Language {
        return this.languaje;
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
    public setTechnology(technology: number) {
        this.technology=technology;
    }
    public setSeniority(seniority: Seniority) {
        this.seniority=seniority;
    }
    public setlanguaje(languaje: Language) {
        this.languaje=languaje;
    }
    public setAverage_salar(average_salary: string) {
        this.averageSalary=average_salary;
    }
    public setGross_margin(gross_margin: string) {
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

