import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    { id: 1, title: 'Post 1'},
    { id: 2, title: 'Post 2'},
    { id: 3, title: 'Post 3'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPostDetails(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }
}
