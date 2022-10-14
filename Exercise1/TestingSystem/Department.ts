

class Department{

    private static counter: number = 0;

    private id: number;
    private name: string;

	constructor( name: string) {
		this.id = ++Department.counter;
		this.name = name;
	}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public setId(value: number) {
		this.id = value;
	}

	public setName(value: string) {
		this.name = value;
	}

}