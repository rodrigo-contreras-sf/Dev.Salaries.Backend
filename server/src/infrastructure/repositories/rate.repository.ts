//import shortid from "shortid";
import Rate from "../../domain/entities/rates.entity"

class RatesRepository {
    private rates: Rate[];

    constructor() {
        this.rates = [];
    }

    async findOneById(id: string): Promise<Rate | null> {
        const rates = this.rates.find(u => u.getId() === id);

        return (rates) ? rates : null;
    }

    async findAll(): Promise<Rate[]> {
        return this.rates;
    }

    async save(rates: Rate): Promise<void> {
        if (!rates.getId()){
            this.rates.push(rates);
        } else {
            this.rates = this.rates.map(function(u) {
                return u.getId()=== rates.getId() ? rates : u; 
            });
        }
       
    }
    async deleteById(id: string):Promise<void>{
        this.rates = this.rates.filter(u => u.getId() !== id);
    }
}
export default new RatesRepository();