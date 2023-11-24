import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-events-handling',
  templateUrl: './events-handling.component.html',
  styleUrls: ['./events-handling.component.css']
})
export class EventsHandlingComponent {

  valueInput:string ='hello'
  
  twoWayBinding:any;

  constructor(private formModule: FormsModule){}

  buttonClick(){  
  alert("Hello! I am an alert box!");
  }
  
  onKeyup(event: any) {
    this.valueInput = event.target.value;
    console.log(this.valueInput)
  }
  onKeyupData(a: any){
    console.log(a)
  }
  onKeyupDataElse() {
    console.log(this.twoWayBinding)
  }
}
