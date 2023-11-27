import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']
  objArray: Array<any> = [{id: 1, postTitle: 'Post 1'},{id: 2, postTitle: 'Post 2'},{id: 3, postTitle: 'Post 3'},{id: 4, postTitle: 'Post 4'},{id: 5, postTitle: 'Post 5'}]
  stepForm:string = 'Else';
  isActive:Boolean = true

  arrayObj(){
    this.objArray.push({id: 6, postTitle: 'Post 6'})
  }

  onDelete(post: any){
    // let index = this.objArray.indexOf(post)
    this.objArray.splice(post, 1)
  }
  switchCase(val: any){
    this.stepForm = val
    console.log(this.stepForm, val)
  }
  
}
