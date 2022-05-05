import { Component, OnInit } from '@angular/core';
import { WidgetSettingDefault } from '../widget.extend';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent extends WidgetSettingDefault implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
