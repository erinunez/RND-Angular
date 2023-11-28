import { Component, OnInit, Input} from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers:[PostService]
})

export class PostListComponent implements OnInit {
  postList: Array<any>
  @Input () dariPost:string;

  constructor(private postService: PostService) {
    this.dariPost = ''
    console.log('masuk tak?')
    console.log(postService.postList)
    this.postList = postService.postList
   }
  ngOnInit(): void {
  }

}