import { Injectable } from '@angular/core';
import { Block, DataSource, Items, Row, Area } from '../../data-source';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  private data: DataSource;

  constructor() {
    this.data = new DataSource(
      '新页面',
      new Array(
        new Area(
          '区域',
          new Array(
            new Block(
              '区块',
              new Array(new Row('LR', new Array(new Items('LR', 'any'))))
            )
          )
        ),
        new Area(
          '区域',
          new Array(
            new Block(
              '区块',
              new Array(new Row('LR', new Array(new Items('LR', 'any'))))
            )
          )
        ),
        new Area(
          '区域',
          new Array(
            new Block(
              '区块',
              new Array(new Row('LR', new Array(new Items('LR', 'any'))))
            )
          )
        )
      )
    );
  }

  getData(): DataSource {
    return this.data;
  }
}
