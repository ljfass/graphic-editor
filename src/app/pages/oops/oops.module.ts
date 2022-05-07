import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopsRoutingModule } from './oops-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ButtonComponent } from './editor/widget/button/button.component';
import { TextComponent } from './editor/widget/text/text.component';
import { WidgetComponent } from './layout/widget/widget.component';
import { AreaComponent } from './editor/core/common/area/area.component';
import { EditRegionComponent } from './layout/edit-region/edit-region.component';
import { HoverDirective } from './directives/hover.directive';
import { HoverProDirective } from './directives/hover-pro.directive';
import { SettingViewComponent } from './layout/setting-view/setting-view.component';
import { ButtonSettingComponent } from './editor/widget/button-setting/button-setting.component';
import { TextSettingComponent } from './editor/widget/text-setting/text-setting.component';

//
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FromComponent } from './editor/widget/from/from.component';
import { FromSettingComponent } from './editor/widget/from-setting/from-setting.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ButtonComponent,
    TextComponent,
    WidgetComponent,
    AreaComponent,
    EditRegionComponent,
    HoverDirective,
    HoverProDirective,
    SettingViewComponent,
    ButtonSettingComponent,
    TextSettingComponent,
    FromComponent,
    FromSettingComponent,
  ],
  imports: [
    CommonModule,
    OopsRoutingModule,
    NzButtonModule,
    NzRadioModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCardModule,
  ],
})
export class OopsModule {}
