import Rate from '../../domain/entities/rates.entity';
import { Language } from '../../domain/enums/language.enum';
import { Seniority } from '../../domain/enums/seniority.enum';

class RatesRepository {
  private rates: Rate[];

  constructor() {
    this.rates = [];
  }

  async findOneById(id: string): Promise<Rate | null> {
    const rates = this.rates.find(r => r.getId() === id);

    return rates ? rates : null;
  }

  async findAll(): Promise<Rate[]> {
    return this.rates;
  }

  async save(rate: Rate): Promise<void> {
    if (
      !(await this.exists(rate.getTechnology().getId(), rate.getSeniority(), rate.getLanguage(), rate.getCurrency()))
    ) {
      this.rates.push(rate);
    } else {
      this.rates = this.rates.map(function (r) {
        return r.getId() === rate.getId() ? rate : r;
      });
    }
  }
  async deleteById(id: string): Promise<void> {
    this.rates = this.rates.filter(r => r.getId() !== id);
  }

  async findAllBy(
    technologyIds?: string[],
    seniority?: Seniority,
    language?: Language,
    currency?: string,
  ): Promise<Rate[]> {
    let rates = this.rates;

    if (technologyIds) {
      this.rates = this.rates.filter(r => technologyIds.includes(r.getTechnology().getId()));
    }

    if (seniority) {
      rates = rates.filter(r => r.getSeniority() == seniority);
    }

    if (language) {
      rates = rates.filter(r => r.getLanguage() == language);
    }

    if (currency) {
      rates = rates.filter(r => r.getCurrency() == currency);
    }

    return rates;
  }

  async exists(technologyId: string, seniority: Seniority, language: Language, currency: string): Promise<boolean> {
    const exists = this.rates.some(element => {
      return (
        element.getTechnology().getId() == technologyId &&
        element.getSeniority() == seniority &&
        element.getLanguage() == language &&
        element.getCurrency() == currency
      );
    });

    return exists;
  }
}
export default new RatesRepository();
