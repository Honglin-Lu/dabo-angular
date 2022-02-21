import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, DoCheck, EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges, TemplateRef,
} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {NbDialogService} from "@nebular/theme";

@Component({
  selector: 'hl-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss'],
})
export class TableBasicComponent implements OnInit, OnChanges, OnDestroy {

  @Input() columns;
  @Input() records;

  @Output() parentDeleteFn: EventEmitter<any> = new EventEmitter<any>();

  pageMeta = {};
  currId: number;

  constructor(private dialogService: NbDialogService) {
  }


  ngOnInit(): void {

  }
  //
  confirmDelete(id: number, dialog: TemplateRef<any>) {
    this.currId = id;
    this.dialogService.open(dialog, { context: 'Are you sure you want to delete it?', closeOnBackdropClick: true });
  }

  deleteFn() {
    this.parentDeleteFn.emit(this.currId);
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
    this.pageMeta = this.records;
    this.records = this.filterData();
  }

  ngOnDestroy() {
  }

}

