class Name {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    getFullName () {
        const fullName = this.firstName + " " + this.middleName + " " + this.lastName;

        // console.log(fullName);
        return fullName;
    }
}