class UpdateRateCommand {
    private id: string;
    private averageSalary: string;
    private grossMargin: string;

    constructor(
        id: string,
        averageSalary: string,
        grossMargin: string,
        )
    {
        this.id = id;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
    }
    public getId(): string {
        return this.id;
    }
    public getAverageSalary(): string {
        return this.averageSalary;
    }
    public getGrossMargin(): string {
        return this.grossMargin;
    }
}

export default UpdateRateCommand