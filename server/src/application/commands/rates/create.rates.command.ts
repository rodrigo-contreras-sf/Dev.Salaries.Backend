import { Seniority } from "../../../domain/enums/seniority.enum"
import { Language } from "../../../domain/enums/language.enum"

class CreateRateCommand {
    private technologyId: string;
    private seniority: Seniority;
    private language: Language;
    private averageSalary: string;
    private grossMargin: string;
    private currency: string;

    constructor(
        technologyId: string,
        seniority: Seniority,
        language: Language,
        averageSalary: string,
        grossMargin: string,
        currency: string
        )
    {
        this.technologyId = technologyId;
        this.seniority = seniority;
        this.language = language;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
        this.currency = currency;
    }
    
    public getTechnologyId(): string {
        return this.technologyId;
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