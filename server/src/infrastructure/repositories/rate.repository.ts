import Rate from "../../domain/entities/rates.entity"
import { Language } from "../../domain/enums/language.enum";
import { Seniority } from "../../domain/enums/seniority.enum";

class RatesRepository {
    private rates: Rate[];

    constructor() {
        this.rates = [];
    }

    async findOneById(id: string): Promise<Rate | null> {
        const rates = this.rates.find(r => r.getId() === id);

        return (rates) ? rates : null;
    }

    async findAll(): Promise<Rate[]> {
        return this.rates;
    }

    async save(rates: Rate): Promise<void> {
        if (!rates.getId()){
            this.rates.push(rates);
        } else {
            this.rates = this.rates.map(function(r) {
                return r.getId()=== rates.getId() ? rates : r; 
            });
        }
       
    }
    async deleteById(id: string):Promise<void>{
        this.rates = this.rates.filter(r => r.getId() !== id);
    }

    async exist(            
    technology: string,
    seniority: string,
    language: string,
    currency: string,)
    {   
        const rate = this.rates.find(r => r.getLanguage() === language && r.getSeniority() 
        === seniority && r.getCurrency() === currency && r.getTechnology().getId() === technology);

        return !!rate;
    }

    async findAllBy(technologyIds: String[], seniority:Seniority, language:Language, currency:string):Promise<Rate[]>{
        //filtros nulleables verificar con if 
        let query = this.rates;
        if(technologyIds){
            query = query.filter(u => technologyIds.includes(u.getTechnology().getId()));
        }//hacer lo mismo con los otros parametros
        if(seniority){
            query = query.filter(u => seniority === u.getSeniority());
        }
        if(language){
            query = query.filter(u => language === u.getLanguage());
        }
        if(currency){
            query = query.filter(u => currency === u.getCurrency());
        }

        return query
        //agregar return promis array de rates
    }
}
export default new RatesRepository();