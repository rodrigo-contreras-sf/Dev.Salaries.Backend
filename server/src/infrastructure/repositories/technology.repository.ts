import Technology from '../../domain/entities/technology.entity';

class TechnologyRepository {
  private technology: Technology[];

  constructor() {
    this.technology = [];
  }

  async findOneById(id: string): Promise<Technology | null> {
    const technology = this.technology.find(u => u.getId() === id);

    return technology ? technology : null;
  }

  async findOneByName(name: string): Promise<Technology | null> {
    const technology = this.technology.find(u => u.getName() === name);

    return technology ? technology : null;
  }

  async findAll(): Promise<Technology[]> {
    return this.technology;
  }

  async save(technology: Technology): Promise<void> {
    if (!(await this.exist(technology.getName()))) {
      this.technology.push(technology);
    } else {
      this.technology = this.technology.map(function (u) {
        return u.getId() === technology.getId() ? technology : u;
      });
    }
  }
  async deleteById(id: string): Promise<void> {
    this.technology = this.technology.filter(u => u.getId() !== id);
  }
  async exist(name: string): Promise<boolean> {
    const technology = this.technology.find(r => r.getName() == name);
    return technology ? true : false;
  }
}

export default new TechnologyRepository();
