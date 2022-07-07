class EmployeePayrollData
{
    id; 
    salary;
    gender; 
    startDate;   
    //Constructor
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1]
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //Getter & Setter Method
    get name() { return this._name; }
    set name(name) 
    { 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)){
            this._name = name;
        }            
        else throw 'Name should start with Capital letter and contain min 4 letters';
     }  
    //Method
    toString() {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "Id: " + this.id + ", Name: " + this.name + ", Salary: " + this.salary + ", Gender: " + this.gender + ", StartDate: " + this.startDate;
    }
}
{
    let employeePayrollData = new EmployeePayrollData(1, "Reshma", 40000);
    console.log(employeePayrollData.toString());
    try
    {
    employeePayrollData.id = 2;
    employeePayrollData.name = "Vahidha";
    employeePayrollData.salary = "60000"
    console.log(employeePayrollData.toString());
    }
    catch(excep){
        console.error(excep);
    }
    //const date = new Date();
    //let newEmployeeData = new EmployeePayrollData(3, "Reshu", 50000, "Female", date.toLocaleDateString());
    let newEmployeeData = new EmployeePayrollData(3, "Reshu", 50000, "Female", new Date());
    console.log(newEmployeeData.toString());
}
