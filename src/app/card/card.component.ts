import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card', //tells other components how to find THIS component
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() username = '';
  @Input() content = '';
  @Input() imgUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
