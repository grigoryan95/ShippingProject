import { Component, OnInit } from '@angular/core';
import {Post, RightContainerServiceService} from "../../services/right-container-service.service";

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  posts: Post[];
  constructor(private post:RightContainerServiceService) {
    this.posts = post.arrObj
  }

  ngOnInit(): void {
  }

}
