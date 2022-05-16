import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  NzTableLayout,
  NzTablePaginationPosition,
  NzTableSize,
} from 'ng-zorro-antd/table';

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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {
  settingForm?: FormGroup;

  listOfData: ItemData[] = []; // 表格中的数据

  displayData: ItemData[] = []; // 分页显示的当前数据

  allChecked = false; // 全选
  indeterminate = false; // 不确定的 - 选中部分了

  fixedColumn = false; //固定列
  scrollX: string | null = null;
  scrollY: string | null = null;
  settingValue!: Setting; //设置修改的值（记录）

  currentPageDataChange($event: ItemData[]): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter((value) => !value.disabled);
    const allChecked =
      validData.length > 0 &&
      validData.every((value) => value.checked === true);
    const allUnChecked = validData.every((value) => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach((data) => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  generateData(): ItemData[] {
    const data = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false,
      });
    }
    return data;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.settingForm = this.formBuilder.group({
      bordered: true,
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
    this.settingValue = this.settingForm.value;
    this.settingForm.valueChanges.subscribe((value) => {
      this.settingValue = value;
    });
    this.settingForm.get('tableScroll')!.valueChanges.subscribe((scroll) => {
      this.fixedColumn = scroll === 'fixed';
      this.scrollX = scroll === 'scroll' || scroll === 'fixed' ? '100vw' : null;
    });
    this.settingForm.get('fixHeader')!.valueChanges.subscribe((fixed) => {
      this.scrollY = fixed ? '240px' : null;
    });
    this.settingForm.get('noResult')!.valueChanges.subscribe((empty) => {
      if (empty) {
        this.listOfData = [];
      } else {
        this.listOfData = this.generateData();
      }
    });
    this.listOfData = this.generateData();
  }
}
