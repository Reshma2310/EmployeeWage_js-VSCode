class EmployeePayrollData
{
    id; 
    salary;      
    // Constructor
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name
        this.salary = salary;
    }
    //Getter & Setter Method
    get name() { return this._name; }
    set name(name)
    {
        this._name = name;
    }  
    //Method
    toString() {
        
        return "Id: " + this.id + ", Name: " + this.name + ", Salary: " + this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Reshma", 40000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Vahidha";
console.log(employeePayrollData.toString());
