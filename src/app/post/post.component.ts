import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PostService  } from '../Services/post.service';
import { Post } from '../model/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  title:string = "List of Posts";
  messagePost :string ='Message Post';
  postParentMessage:string = "Message from Post Parent!!";
  childText:string = 'Hello world from child'
  outputChildText:string = 'Hello this is data using output decorater'
  listArray: Array<any>

  @Input () fromParent:string;
  @Output() messageFromEvent = new EventEmitter<string>();
  constructor(private postService: PostService) {
    this.fromParent = ''
    // let postService = new PostService()
    this.listArray =  postService.postList
   }
  ngOnInit(): void {
  }
  sendMessage() {
    console.log('button works')
    this.messageFromEvent.emit(this.outputChildText)
  }
  
  addNewData(){
    let newData: Post = {
      id: 7,
      postTitle: 'Post 7'
    }

    this.postService.addNewPost(newData);
  }

}
