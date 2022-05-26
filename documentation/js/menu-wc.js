'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">graphic-editor documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="请输入查询关键字"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>入门指南</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>概述
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>手册
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>依赖项
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>属性列表
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">模块列表</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6cd4c1121a180a8b13db43e0d7cb353e5db12921539c55832e719f00af3e3eb7644479162eedc6163a18a4eedb655dedc1bcea0fa76949c707d971c321258057"' : 'data-target="#xs-components-links-module-AppModule-6cd4c1121a180a8b13db43e0d7cb353e5db12921539c55832e719f00af3e3eb7644479162eedc6163a18a4eedb655dedc1bcea0fa76949c707d971c321258057"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>组件列表</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6cd4c1121a180a8b13db43e0d7cb353e5db12921539c55832e719f00af3e3eb7644479162eedc6163a18a4eedb655dedc1bcea0fa76949c707d971c321258057"' :
                                            'id="xs-components-links-module-AppModule-6cd4c1121a180a8b13db43e0d7cb353e5db12921539c55832e719f00af3e3eb7644479162eedc6163a18a4eedb655dedc1bcea0fa76949c707d971c321258057"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OopModelModule.html" data-type="entity-link" >OopModelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' : 'data-target="#xs-components-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>组件列表</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' :
                                            'id="xs-components-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' }>
                                            <li class="link">
                                                <a href="components/Demo1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Demo1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' : 'data-target="#xs-directives-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>指令列表</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' :
                                        'id="xs-directives-links-module-OopModelModule-1539249803304677fab335834f1fdd26349b388c458212617ea0583fded92267ddafb89143670fafa8c4edc28211ffb31a4fcc15dbc71c11583109bd3b725ab8"' }>
                                        <li class="link">
                                            <a href="directives/ChengDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChengDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/CustomDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FrameDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/XuDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >XuDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OopModelRoutingModule.html" data-type="entity-link" >OopModelRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OopModule.html" data-type="entity-link" >OopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OopModule-81c1aacc62a59a456c4f00b970e39d6085a0fc12e826dfb3ec50310f6f27f05bc18539258444fbbf6bcb4c27c73fe8555b462c17cfcd4c049ec80d7ee4941691"' : 'data-target="#xs-components-links-module-OopModule-81c1aacc62a59a456c4f00b970e39d6085a0fc12e826dfb3ec50310f6f27f05bc18539258444fbbf6bcb4c27c73fe8555b462c17cfcd4c049ec80d7ee4941691"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>组件列表</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OopModule-81c1aacc62a59a456c4f00b970e39d6085a0fc12e826dfb3ec50310f6f27f05bc18539258444fbbf6bcb4c27c73fe8555b462c17cfcd4c049ec80d7ee4941691"' :
                                            'id="xs-components-links-module-OopModule-81c1aacc62a59a456c4f00b970e39d6085a0fc12e826dfb3ec50310f6f27f05bc18539258444fbbf6bcb4c27c73fe8555b462c17cfcd4c049ec80d7ee4941691"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DragDynamicComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DragDynamicComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibComponentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibComponentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RulerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RulerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UdlrDragBugComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UdlrDragBugComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewChildDynamicComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewChildDynamicComponentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OopRoutingModule.html" data-type="entity-link" >OopRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OopsModule.html" data-type="entity-link" >OopsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' : 'data-target="#xs-components-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>组件列表</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' :
                                            'id="xs-components-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' }>
                                            <li class="link">
                                                <a href="components/AccomplishComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccomplishComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollapseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollapseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollapseSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollapseSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FromComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FromComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FromSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FromSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' : 'data-target="#xs-directives-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>指令列表</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' :
                                        'id="xs-directives-links-module-OopsModule-d0b31df9149b0a5ada6361fbad7b3991463692aea5999555b37aac86c8bd233740eb3adc9d1d90e37d71397a054d524af1368e5f898eb11ccbe3c7bd72db1288"' }>
                                        <li class="link">
                                            <a href="directives/HoverDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HoverDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HoverProDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HoverProDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OopsRoutingModule.html" data-type="entity-link" >OopsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>组件列表</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ButtonComponent-1.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DemoComponent-1.html" data-type="entity-link" >DemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WidgetComponent-1.html" data-type="entity-link" >WidgetComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>类列表</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractWidget.html" data-type="entity-link" >AbstractWidget</a>
                            </li>
                            <li class="link">
                                <a href="classes/Area.html" data-type="entity-link" >Area</a>
                            </li>
                            <li class="link">
                                <a href="classes/Area-1.html" data-type="entity-link" >Area</a>
                            </li>
                            <li class="link">
                                <a href="classes/Block.html" data-type="entity-link" >Block</a>
                            </li>
                            <li class="link">
                                <a href="classes/ButtonWidget.html" data-type="entity-link" >ButtonWidget</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataSource.html" data-type="entity-link" >DataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultConfig.html" data-type="entity-link" >DefaultConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Editable.html" data-type="entity-link" >Editable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Editor.html" data-type="entity-link" >Editor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Items.html" data-type="entity-link" >Items</a>
                            </li>
                            <li class="link">
                                <a href="classes/Row.html" data-type="entity-link" >Row</a>
                            </li>
                            <li class="link">
                                <a href="classes/Widget.html" data-type="entity-link" >Widget</a>
                            </li>
                            <li class="link">
                                <a href="classes/Widget-1.html" data-type="entity-link" >Widget</a>
                            </li>
                            <li class="link">
                                <a href="classes/WidgetSettingDefault.html" data-type="entity-link" >WidgetSettingDefault</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>可注入的</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataSourceService.html" data-type="entity-link" >DataSourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreService.html" data-type="entity-link" >StoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuperStoreService.html" data-type="entity-link" >SuperStoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetService.html" data-type="entity-link" >WidgetService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>接口</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActiveState.html" data-type="entity-link" >ActiveState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragAndDorp.html" data-type="entity-link" >DragAndDorp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragListModel.html" data-type="entity-link" >DragListModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Editable.html" data-type="entity-link" >Editable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Editor.html" data-type="entity-link" >Editor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemData.html" data-type="entity-link" >ItemData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/putArea.html" data-type="entity-link" >putArea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Setting.html" data-type="entity-link" >Setting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SettingDefaultType.html" data-type="entity-link" >SettingDefaultType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Widget.html" data-type="entity-link" >Widget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetListItem.html" data-type="entity-link" >WidgetListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YunTuWidget.html" data-type="entity-link" >YunTuWidget</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>其他</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">枚举列表</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">类型别名</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">变量</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>路由列表</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>文档概览</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        文档生成使用 <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});