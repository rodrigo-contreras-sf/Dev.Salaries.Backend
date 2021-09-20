//import shortid from "shortid";
import{Rate} from "../../domain/entities/rates.entity"

class RatesRepository {
    private rates: Rate[];

    constructor() {
        this.rates = [];
    }

    async findOneById(id: number): Promise<Rate | null> {
        const user = this.rates.find(u => u.id === id);

        return (user) ? user : null;
    }

    async findAll(): Promise<Rate[]> {
        return this.rates;
    }

    async save(rates: Rate): Promise<void> {
        if (!rates.id) {}
       
    }
}