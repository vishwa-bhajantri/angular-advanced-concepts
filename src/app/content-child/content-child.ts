import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-content-child',
  styleUrl: './content-child.css',
  templateUrl: './content-child.html',
})
export class ContentChildComponent {

  //Example 1:
  @ContentChild('employee') employee !: ElementRef<HTMLParagraphElement>;

  FirstEmployee = ""
  
  Showemployee(){

    this.FirstEmployee = this.employee.nativeElement.textContent.trim();
    console.log(this.employee)
  }

 //Examole 2:
  @ContentChildren('employee') employees !: QueryList<ElementRef<HTMLParagraphElement>>;


  empList:string[] = [];
  Showemployees(){

    this.employees.forEach((employee:ElementRef<HTMLParagraphElement>)=>{

      let empName = employee.nativeElement.textContent.trim();
      if(empName){
        this.empList.push(empName);
      }
    })
  }
}