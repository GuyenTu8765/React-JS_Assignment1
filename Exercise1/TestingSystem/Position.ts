class Position{

    private static counter: number = 0;

    private id: number;
    private name: String;


	constructor( name: String) {
		this.id = ++Position.counter;
		this.name = name;
	}

	public getId(): number {
		return this.id;
	}

	public getName(): String {
		return this.name;
	}

	public setId(value: number) {
		this.id = value;
	}

	public setName(value: String) {
		this.name = value;
	}


}