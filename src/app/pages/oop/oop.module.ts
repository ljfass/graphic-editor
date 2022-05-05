import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopRoutingModule } from './oop-routing.module';
import { DemoComponent } from './demo/demo.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { OopComponent } from './oop.component';
import { ButtonComponent } from './editor/widget/button/button.component';
import { ViewChildDynamicComponentComponent } from './demo/demo-components/view-child-dynamic-component/view-child-dynamic-component.component';
import { RulerComponent } from './editor/components/ruler/ruler.component';
import { LibComponentsComponent } from './view/lib-components/lib-components.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDynamicComponentComponent } from './demo/demo-components/drag-dynamic-component/drag-dynamic-component.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { UdlrDragBugComponent } from './demo/demo-components/udlr-drag-bug/udlr-drag-bug.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WidgetComponent } from './editor/widget/widget.component';
import { CardComponent } from './editor/widget/card/card.component';
import { ChipsComponent } from './editor/widget/chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SettingComponent } from './view/setting/setting.component';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    DemoComponent,
    OopComponent,
    ButtonComponent,
    ViewChildDynamicComponentComponent,
    RulerComponent,
    LibComponentsComponent,
    DragDynamicComponentComponent,
    UdlrDragBugComponent,
    WidgetComponent,
    CardComponent,
    ChipsComponent,
    SettingComponent,
  ],
  imports: [
    CommonModule,
    OopRoutingModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    MatGridListModule,
    MatSidenavModule,
    MatChipsModule,
    MatInputModule,
    FormsModule,
    NzInputNumberModule,
    NzRadioModule,
  ],
})
export class OopModule {}
