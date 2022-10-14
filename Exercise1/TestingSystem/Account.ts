
class Account{

    private static counter: number = 0;

    private id: number;
    private email: String;
    private userName: String;
    private fullName: String;
    private departmentID: number;
    private positionID: number;
    private createDate: Date; 


	constructor( email: String, userName: String, fullName: String, departmentID: number, positionID: number, createDate: Date) {
		this.id = ++Account.counter;
		this.email = email;
		this.userName = userName;
		this.fullName = fullName;
		this.departmentID = departmentID;
		this.positionID = positionID;
		this.createDate = createDate;
	}

	public getId(): number {
		return this.id;
	}

	public getEmail(): String {
		return this.email;
	}

	public getUserName(): String {
		return this.userName;
	}

	public getFullName(): String {
		return this.fullName;
	}

	public getDepartmentID(): number {
		return this.departmentID;
	}

	public getPositionID(): number {
		return this.positionID;
	}

	public getCreateDate(): Date {
		return this.createDate;
	}

	public setId(value: number) {
		this.id = value;
	}

	public setEmail(value: String) {
		this.email = value;
	}

	public setUserName(value: String) {
		this.userName = value;
	}

	public setFullName(value: String) {
		this.fullName = value;
	}

	public setDepartmentID(value: number) {
		this.departmentID = value;
	}

	public setPositionID(value: number) {
		this.positionID = value;
	}

	public setCreateDate(value: Date) {
		this.createDate = value;
	}

}