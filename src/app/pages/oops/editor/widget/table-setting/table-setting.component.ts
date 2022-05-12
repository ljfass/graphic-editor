import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  NzTableLayout,
  NzTablePaginationPosition,
  NzTableSize,
} from 'ng-zorro-antd/table';
import { TableComponent } from '../table/table.component';

interface ItemData {
  name: string;
  age: number | string;
  address: string;
  checked: boolean;
  expand: boolean;
  description: string;
  disabled?: boolean;
}

interface Setting {
  bordered: boolean;
  loading: boolean;
  pagination: boolean;
  sizeChanger: boolean;
  title: boolean;
  header: boolean;
  footer: boolean;
  expandable: boolean;
  checkbox: boolean;
  fixHeader: boolean;
  noResult: boolean;
  ellipsis: boolean;
  simple: boolean;
  size: NzTableSize;
  tableScroll: string;
  tableLayout: NzTableLayout;
  position: NzTablePaginationPosition;
}

@Component({
  selector: 'app-table-setting',
  templateUrl: './table-setting.component.html',
  styleUrls: ['./table-setting.component.less'],
})
export class TableSettingComponent implements OnInit, AfterViewInit {
  constructor(private formBuilder: FormBuilder) {}

  settingForm?: FormGroup = this.formBuilder.group({
    bordered: false,
    loading: false,
    pagination: true,
    sizeChanger: false,
    title: true,
    header: false,
    footer: false,
    expandable: true,
    checkbox: true,
    fixHeader: false,
    noResult: false,
    ellipsis: false,
    simple: false,
    size: 'small',
    tableScroll: 'unset',
    tableLayout: 'auto',
    position: 'bottom',
  });

  @Input() WidgetInstance: TableComponent;

  ngOnInit(): void {
    // this.settingForm = this.formBuilder.group({
    //   bordered: false,
    //   loading: false,
    //   pagination: true,
    //   sizeChanger: false,
    //   title: true,
    //   header: false,
    //   footer: false,
    //   expandable: true,
    //   checkbox: true,
    //   fixHeader: false,
    //   noResult: false,
    //   ellipsis: false,
    //   simple: false,
    //   size: 'small',
    //   tableScroll: 'unset',
    //   tableLayout: 'auto',
    //   position: 'bottom',
    // });
    // console.log(this.settingForm.get('header').value);
    // // this.settingForm.get('footer')!.valueChanges.subscribe((data) => {
    // //   console.log(data);
    // // });
    // this.settingForm.valueChanges.subscribe((value) => {
    //   console.log('hello world');
    // });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settingForm = this.formBuilder.group({
        bordered: false,
        loading: false,
        pagination: true,
        sizeChanger: false,
        title: true,
        header: true,
        footer: true,
        expandable: true,
        checkbox: true,
        fixHeader: false,
        noResult: false,
        ellipsis: false,
        simple: false,
        size: 'small',
        tableScroll: 'unset',
        tableLayout: 'auto',
        position: 'bottom',
      });
      this.settingForm.valueChanges.subscribe((value) => {
        this.WidgetInstance.settingForm.patchValue(value);
      });
    });
  }

  listOfSwitch = [
    { name: 'Bordered', formControlName: 'bordered' },
    { name: 'Loading', formControlName: 'loading' },
    { name: 'Pagination', formControlName: 'pagination' },
    { name: 'PageSizeChanger', formControlName: 'sizeChanger' },
    { name: 'Title', formControlName: 'title' },
    { name: 'Column Header', formControlName: 'header' },
    { name: 'Footer', formControlName: 'footer' },
    { name: 'Expandable', formControlName: 'expandable' },
    { name: 'Checkbox', formControlName: 'checkbox' },
    { name: 'Fixed Header', formControlName: 'fixHeader' },
    { name: 'No Result', formControlName: 'noResult' },
    { name: 'Ellipsis', formControlName: 'ellipsis' },
    { name: 'Simple Pagination', formControlName: 'simple' },
  ];
  listOfRadio = [
    {
      name: 'Size',
      formControlName: 'size',
      listOfOption: [
        { value: 'default', label: 'Default' },
        { value: 'middle', label: 'Middle' },
        { value: 'small', label: 'Small' },
      ],
    },
    {
      name: 'Table Scroll',
      formControlName: 'tableScroll',
      listOfOption: [
        { value: 'unset', label: 'Unset' },
        { value: 'scroll', label: 'Scroll' },
        { value: 'fixed', label: 'Fixed' },
      ],
    },
    {
      name: 'Table Layout',
      formControlName: 'tableLayout',
      listOfOption: [
        { value: 'auto', label: 'Auto' },
        { value: 'fixed', label: 'Fixed' },
      ],
    },
    {
      name: 'Pagination Position',
      formControlName: 'position',
      listOfOption: [
        { value: 'top', label: 'Top' },
        { value: 'bottom', label: 'Bottom' },
        { value: 'both', label: 'Both' },
      ],
    },
  ];
}
