import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  employeeName = signal("Peter");
  basicSalary = signal(30000);
  yearlySalary = computed(() => this.basicSalary() * 12);

  constructor() {

    effect(() => {
      console.log(`Employee Name: ${this.employeeName()} | Basic Salary: ${this.basicSalary()} | Yearly Salary: ${this.yearlySalary()}`);
    });
  }


  changeEmployeeName() {
    this.employeeName.set("John");
  }

  setSalary() {
    this.basicSalary.set(50000);
}

  updateSalary() {
    this.basicSalary.update((value) => value + 5000);
  }
}