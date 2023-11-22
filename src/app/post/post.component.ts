import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:string = "List of Posts";
  messagePost :string ='Message Post';
  postParentMessage:string = "Message from Post Parent!!";
  childText:string = 'Hello world from child'
  outputChildText:string = 'Hello this is data using output decorater'
  // postList:

  @Input () fromParent:string;
  @Output() messageFromEvent = new EventEmitter<string>();
  constructor() {
    this.fromParent = ''
   }
  ngOnInit(): void {
  }
  sendMessage() {
    console.log('button works')
    this.messageFromEvent.emit(this.outputChildText)
  }

}
