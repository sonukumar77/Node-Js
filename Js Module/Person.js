class Person
{
    constructor()
    {
        this.firstName = "Sonu";
        this.lastName = "Kumar";
    }

    getFullName()
    {
        return this.firstName + " " + this.lastName ;
    }

}

module.exports = Person;