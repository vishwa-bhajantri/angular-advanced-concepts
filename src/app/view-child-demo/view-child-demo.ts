import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child-demo',
  styleUrl: './view-child-demo.css',
  templateUrl: './view-child-demo.html',
})
export class ViewChildDemo implements AfterViewInit{


  // Example of @View Child

    @ViewChild('employeeName') employeeName !: ElementRef<HTMLInputElement>;

    ngAfterViewInit(): void {
      console.log(this.employeeName.nativeElement.value);
    }

    emp = ""
    ShowEmployee(){
      this.emp = this.employeeName.nativeElement.value;
      console.log(this.employeeName.nativeElement.value);
    }




  //Example of @ViewChildren

    @ViewChildren('employee') employees !: QueryList<ElementRef<HTMLAnchorElement>>;

    employeeList :string[] = [];

    ShowEmployees(){
      
      this.employees.forEach((employee:ElementRef)=>{
        console.log(employee.nativeElement.value);

        const name = employee.nativeElement.value;
        if(name)
          this.employeeList.push(name);
      })
    }
}
