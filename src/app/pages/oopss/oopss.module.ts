import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopssRoutingModule } from './oopss-routing.module';
import { IndexComponent } from './index/index.component';
import { ButtonComponent } from './editor/widget/button/button.component';
import { ButtonSettingComponent } from './editor/widget/button-setting/button-setting.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ViewWidgetComponent } from './editor/view/view-widget/view-widget.component';
import { ViewEditorComponent } from './editor/view/view-editor/view-editor.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    IndexComponent,
    ButtonComponent,
    ButtonSettingComponent,
    ViewWidgetComponent,
    ViewEditorComponent,
  ],
  imports: [CommonModule, OopssRoutingModule, NzButtonModule, NzCardModule],
})
export class OopssModule {}
