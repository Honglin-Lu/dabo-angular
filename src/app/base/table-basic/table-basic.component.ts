import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'hl-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss'],
})
export class TableBasicComponent implements OnInit, OnChanges, OnDestroy {

  @Input() columns;
  @Input() records;

  source: LocalDataSource = new LocalDataSource();

  constructor() {
  }


  ngOnInit(): void {

  }

  filterData() {
    const dataArr = [];
    this.records?.content?.forEach((v, i) => {
      const obj = {};
      for (const c in this.columns) {
        if (c in v) { obj[c] = v[c]; }
        dataArr[i] = obj;
      }
    });
    return dataArr;
  }

  log (val) {
    console.log(val);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.records = this.filterData();
  }

  ngOnDestroy() {
  }

}

