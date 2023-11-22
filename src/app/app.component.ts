import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage:string = 'Message coming from parent component!!';
  childMessage:string = ''
  childEmit:any

  @ViewChild(PostComponent) childComp !: PostComponent

  constructor(){
  }

  ngAfterViewInit() { // lepas dom siap
    console.log(this.childComp.childText)
    // this.childMessage = this.childComp
  }

  getData(text: any):void {
    this.childEmit = text
    console.log('child text: ', text);
}
}
