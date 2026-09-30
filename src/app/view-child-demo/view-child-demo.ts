import { AfterViewInit, Component, ElementRef, QueryList, 
  ViewChild, ViewChildren, computed, signal, viewChild, 
  viewChildren} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child-demo',
  styleUrl: './view-child-demo.css',
  templateUrl: './view-child-demo.html',
})
export class ViewChildDemo {


  // Example of viewChild signal

    employeeName = viewChild<ElementRef<HTMLInputElement>>('employeeName');
    selectedEmployeesName = signal('');

    employeeEmail = viewChild<ElementRef<HTMLInputElement>>('employeeEmail');
    selectedEmployeesEmail = signal('');

    employeeNameSt: string = "";
    employeeEmailSt: string = "";

    ShowEmployee(){

      this.employeeNameSt = this.employeeName()?.nativeElement.value?? "";
      this.selectedEmployeesName.set(this.employeeNameSt)
      //console.log(this.employeeNameSt);
    }

    ShowEmail(){
      this.employeeEmailSt = this.employeeEmail()?.nativeElement.value?? "";
      this.selectedEmployeesEmail.set(this.employeeEmailSt)
      console.log(this.employeeEmailSt);
    }




  //Example of viewChildren

    //@ViewChildren('employee') employees !: QueryList<ElementRef<HTMLAnchorElement>>;

    employees = viewChildren<ElementRef<HTMLInputElement>>('employees');
    employeeList :string[] = [];

    employeeCount = computed(()=> this.employees().length)

    ShowEmployees(){
      
      this.employees().forEach((employee:ElementRef)=>{
       // console.log(employee.nativeElement.value);

        const name = employee.nativeElement.value;
        if(name)
          this.employeeList.push(name);
      })

      console.log(this.employeeList);
    }
  }
