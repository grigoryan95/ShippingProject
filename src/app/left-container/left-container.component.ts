import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnInit {
  @Output() pageOutput: EventEmitter<string> = new EventEmitter<string>()
  page = 'shipping';

  constructor() {
  }

  ngOnInit(): void {
    this.pageOutput.emit(this.page)
  }

}
