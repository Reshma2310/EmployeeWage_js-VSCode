class EmployeePayrollData {
    
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1]
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }
    get id() 
    {
        return this._id;
    }
    set id(id)
    {
        let idCheck = RegExp('^[1-9]{1}([0-9]*)$')
        if(idCheck.test(id))
        {
            this._id = id;
        }
        else
        {
            throw "ID should be non zero positive number";
        }
    }
    get salary() 
    {
        return this._salary;
    }
    set salary(salary)
    {
        let salaryCheck = RegExp('^[1-9]{1}([0-9]*)([.]*)[0-9]*$')
        if(salaryCheck.test(salary))
        {
            this._salary = salary;
        }
        else
        {
            throw "Salary should be non zero positive number";
        }
    }
    get gender() 
    {
        return this._gender;
    }
    set gender(gender)
    {
        let genderCheck = RegExp('^[M|F]{1}$')
        if(genderCheck.test(gender))
        {
            this._gender = gender;
        }
        else
        {
            throw "Gender should be either F or M";
        }
    }
    get startDate() 
    {
        return this._startDate;
    }
    set startDate(startDate)
    {
        let today = new Date();
        let dateCheck = RegExp("^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$");
        if(startDate <= today.toLocaleDateString())
        {
            if(dateCheck.test(startDate))
            {
                this._startDate = startDate;
            }
            else
            {
                throw "Format Mismatch";
            }
        }
        else
        {
            throw "Start Date should be less than or equal to current Date";
        }
    }
    get email() 
    {
        return this._email;
    }
    set email(email)
    {
        let emailCheck = RegExp('^[0-9a-z]{1,}([.+-]?)[0-9a-z]{1,}(@)[a-z0-9]{1,}(.)(com|co|net)((.in|.com|.au)*)$')
        if(emailCheck.test(email))
        {
            this._email = email;
        }
        else
        {
            throw "Invalid Email ID";
        }
    }
    get zipCode() 
    {
        return this._zipCode;
    }
    set zipCode(zipCode)
    {
        let zipCodeCheck = RegExp('^[0-9]{6}$')
        if(zipCodeCheck.test(zipCode))
        {
            this._zipCode = zipCode;
        }
        else
        {
            throw "Invalid zipCode";
        }
    }
    
    Employee()
    {
        return "id =" + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + this.startDate +
        ",Email: " + this.email + ",Zip Code: " + this.zipCode;
    }
}
{
    try
    {
    let employeePayrollData = new EmployeePayrollData(1, "Reshma", 40000, "F", new Date("8/7/2022").toLocaleDateString(), "reshma@gmail.com", 333329);
    console.log(employeePayrollData.Employee());
    employeePayrollData = new EmployeePayrollData(2, "Basith", 40000, "M", new Date("6/7/2022").toLocaleDateString(), "basith@gmail.com", 555048);
    console.log(employeePayrollData.Employee());
    employeePayrollData.id = 3;
    employeePayrollData.name = "Tanvir";
    employeePayrollData.salary = 20000;
    employeePayrollData.gender = "F";
    employeePayrollData.startDate = new Date("9-7-2022").toLocaleDateString();    
    console.log(employeePayrollData.Employee());
    }
    catch(ex)
    {
        console.error(ex);
    }
}