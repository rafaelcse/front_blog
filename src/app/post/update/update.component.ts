import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { PostModel } from '../../_model/post.model';
import { TokenStorageService } from '../../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class PostUpdateComponent implements OnInit {
  
  user_id: String | null = null;

  constructor(
    private token: TokenStorageService,
    private PostService:PostService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.user_id = this.token.getUser();
    }

  post: PostModel = {
    title: '',
    description: ''
  };
  submitted = false;

  ngOnInit(): void {
    this.getPosts(this.route.snapshot.params.id);
  }

  getPosts(id: string): void {
    this.PostService.get(id)
      .subscribe(
        data => {
          this.post = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  savePost(): void {
    const data = {
      _id:this.post._id,
      title: this.post.title,
      description: this.post.description,
      author: this.user_id,
      comments:[]
    };

    this.PostService.update(data)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      description: ''
    };
  }
}