class GroupAccount{

    private groupID: number;
    private accountID: number;
    private joinDate: Date;


	constructor(groupID: number, accountID: number, joinDate: Date) {
		this.groupID = groupID;
		this.accountID = accountID;
		this.joinDate = joinDate;
	}


	public getGroupID(): number {
		return this.groupID;
	}

	public getAccountID(): number {
		return this.accountID;
	}

	public getJoinDate(): Date {
		return this.joinDate;
	}

	public setGroupID(value: number) {
		this.groupID = value;
	}

	public setAccountID(value: number) {
		this.accountID = value;
	}

	public setJoinDate(value: Date) {
		this.joinDate = value;
	}
    
}