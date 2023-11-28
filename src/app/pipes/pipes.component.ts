import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  textUpper: string = 'This is uppercase'
  textLower: string = 'This is lovercase'
  numberCount: number = 837402
  dcValue: number = 3.26721
  price: number = 99.99
  today: Date = new Date()
  jsonArray: Array<any> = [{ id: 0, empName:"shamsul"}, {id: 0, empName:"shamsul"}, {id:0, empName :"shamsul"},{id :0, empName:"shamsul"}]
  sliceArray: Array<string> = [ 'post1', 'post2', 'post3', 'post4', 'post5']
  userDetails: Array<any> = [ {
    name: 'John Doe',
    age: '23',
    country: 'US',
  },
  {
    name: 'Mariam',
    age: '25',
    country: 'MAS',
  },
  {
    name: 'Zulkifli',
    age: '18',
    country: 'MAS',
  },
]
dummyText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
