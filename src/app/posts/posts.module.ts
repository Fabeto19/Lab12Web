import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    PostComponent
    
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
