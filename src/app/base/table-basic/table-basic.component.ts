import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../../@core/data/smart-table';
import {settings} from "cluster";

@Component({
  selector: 'hl-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss'],
})
export class TableBasicComponent implements OnInit, OnChanges {

  @Input() table;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {


    // const data = this.service.getData();
    // this.source.load(data);

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // this.table?.data?.data?.content?.forEach((v, i) => {
    //   console.log(v);
    //   const obj = {};
    //   // console.log(v);
    //   for (const c in this.table.columns) {
    //     if (c in v) {
    //       obj[c] = v[c];
    //     }
    //     this.table.data[i] = obj;
    //   }
    // });
    // console.log(changes);
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

