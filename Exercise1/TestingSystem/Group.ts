class Group{

    private static counter: number = 0;

    private id: number;
    private name: String;
    private creatorID: number;
    private createDate: Date;


	constructor( name: String, creatorID: number, createDate: Date) {
		this.id = ++Group.counter;
		this.name = name;
		this.creatorID = creatorID;
		this.createDate = createDate;
	}

	public getId(): number {
		return this.id;
	}

	public getName(): String {
		return this.name;
	}

	public getCreatorID(): number {
		return this.creatorID;
	}

	public getCreateDate(): Date {
		return this.createDate;
	}

	public setId(value: number) {
		this.id = value;
	}
    public setName(value: String) {
		this.name = value;
	}

	public setCreatorID(value: number) {
		this.creatorID = value;
	}

	public setCreateDate(value: Date) {
		this.createDate = value;
	}


}