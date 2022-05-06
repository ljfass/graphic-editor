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

@NgModule({
  declarations: [LayoutComponent, ButtonComponent, TextComponent, WidgetComponent, AreaComponent, EditRegionComponent, HoverDirective, HoverProDirective],
  imports: [CommonModule, OopsRoutingModule],
})
export class OopsModule {}
