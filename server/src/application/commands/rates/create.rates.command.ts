import { Seniority } from "../../../domain/enums/seniority.enum"
import { Language } from "../../../domain/enums/language.enum"
import Technology from "../../../domain/entities/technology.entity";

class CreateRateCommand {
    private technology: Technology;
    private seniority: Seniority;
    private language: Language;
    private averageSalary: string;
    private grossMargin: string;
    private currency: string;

    constructor(
        technology: Technology,
        seniority: Seniority,
        language: Language,
        averageSalary: string,
        grossMargin: string,
        currency: string
        )
    {
        this.technology = technology;
        this.seniority = seniority;
        this.language = language;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
        this.currency = currency;
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
    public getAverageSalary(): string {
        return this.averageSalary;
    }
    public getGrossMargin(): string {
        return this.grossMargin;
    }
    public getCurrency(): string {
        return this.currency;
    }
}

export default CreateRateCommand