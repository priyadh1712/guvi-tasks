class person{
    constructor(name, age, dob){
        this.name=name
        this.age=age
        this.dob=dob
    }
    getPersonName(){
        return this.name;
    }
    getPersonAge(){
        return this.age;
    }
    getPersonDob(){
        return this.dob;
    }
}
    const person1= new person("name1", 20, "17.12.2003" );

    console.log(person1.getPersonAge(), person1.getPersonName());
        
    
