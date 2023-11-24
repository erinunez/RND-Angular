import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  interpolationText: string = 'any text can be considered'
  interpolationText2: any
  propertyBinding: string = 'https://v2.angular.io/resources/images/devguide/lifecycle-hooks/hooks-in-sequence.png'
  redText: boolean = true
  blueText: boolean = false

  constructor() {
    this.interpolationText2 = 'any text can not be considered'
  }
  ngOnInit(): void {
  }
}
