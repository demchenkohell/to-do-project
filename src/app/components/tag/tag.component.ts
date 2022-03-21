import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() text = '';
  @Input() color = '';

  constructor() { }

  ngOnInit(): void {
  }

}
