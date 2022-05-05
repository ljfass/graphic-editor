import { Component, OnInit } from '@angular/core';
import { SettingDefaultType } from '../../editor/widget/widget.extend';
import { WidgetService } from '../../editor/widget/widget.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less'],
})
export class SettingComponent implements OnInit {
  constructor(public WidgetService: WidgetService) {}

  isActive: any;
  ngOnInit(): void {
    this.WidgetService.subject$.subscribe((res) => {
      this.isActive = res.find((item) => item.state == true).component.instance;
      if (this.isActive) {
        // this.width = this.isActive.defaultSetting.width;
        const { width, height, align, fontSize } = this.isActive.defaultSetting;
        this.width = width;
        this.height = height;
        this.align = align;
        this.fontSize = fontSize;
      }
    });
    // console.log(this.isActive);
  }

  width: number = 200;

  changeWidth() {
    this.isActive.changeWidth(this.width);
  }

  height: number = 100;
  changeHight() {
    this.isActive.changeHight(this.height);
  }

  align = 'center';
  changeAlign() {
    this.isActive.changeAlign(this.align);
  }

  fontSize: number = 14;
  changeFontSize() {
    this.isActive.changeFontSize(this.fontSize);
  }
}
