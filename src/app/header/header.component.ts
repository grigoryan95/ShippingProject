import {Component, OnInit} from '@angular/core';
import {Post, RightContainerServiceService} from "../services/right-container-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }


}
