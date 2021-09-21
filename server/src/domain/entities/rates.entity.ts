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
    private average_salary:string;
    private gross_margin:string;
    private currency:string;
    

    constructor(
        technology: number,
         seniority:Seniority,
          languaje:Language,
           average_salary:string,
            gross_margin:string,
             currency:string
             ) 
        {
        this.id = shortid.generate();
        this.technology = technology;
        this.seniority = seniority;
        this.languaje = languaje;
        this.average_salary = average_salary;
        this.gross_margin = gross_margin;
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
        return this.average_salary;
    }
    public getGross_margin(): string {
        return this.gross_margin;
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
        this.average_salary=average_salary;
    }
    public setGross_margin(gross_margin: string) {
        this.gross_margin=gross_margin;
    }
    public setCurrency(currency: string) {
        this.currency=currency;
    }

    public Total()
    {
        return parseInt(this.gross_margin) + parseInt(this.average_salary);
    }
    
    public grossMarginPercentage()
    {
        return parseInt(this.gross_margin) / this.Total();
    }



}
export default Rate;

