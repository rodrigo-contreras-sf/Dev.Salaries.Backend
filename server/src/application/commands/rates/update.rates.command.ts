import { Seniority } from "../../../domain/enums/seniority.enum"
import { Language } from "../../../domain/enums/language.enum"

export interface UpdateRateCommand {
    id: number;
    technology: number;
    seniority: Seniority;
    language: Language;
    averageSalary: string;
    grossMargin: string;
    currency: string;
}