import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less'],
})
export class TextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  text = '啥也不是啊';
}
