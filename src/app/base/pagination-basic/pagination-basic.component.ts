import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'hl-pagination-basic',
  templateUrl: './pagination-basic.component.html',
  styleUrls: ['./pagination-basic.component.scss'],
})
export class PaginationBasicComponent implements OnInit, OnChanges, OnDestroy {

  @Input() pageMeta;

  isEmpty: boolean = true;

  pages = [];

  pageSub: Subscription;

  makePage = (total, cur, around) => {
    let result = [];
    const baseCount = around * 2 + 1 + 2 + 2 + 2;
    const surplus = baseCount - 4;
    const startPosition = 1 + 2 + around + 1;
    const endPosition = total - 2 - around - 1;

    if (total <= baseCount - 2) {
      result =  Array.from({length: total}, (v, i) => i + 1);
    } else {
      if (cur < startPosition) {
        result = [...Array.from({length: surplus}, (v, i) => i + 1), "...", total];
      } else if (cur > endPosition) {
        result = [1, '...', ...Array.from({length: surplus}, (v, i) => total - surplus + i + 1)];
      } else {
        result = [1, '...', ...Array.from({length: around * 2 + 1}, (v, i) => cur - around + i), '...', total];
      }
    }

    return result;
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pageSub = this.route.queryParams
      .subscribe(params => {
        this.pages = this.makePage(this.pageMeta?.totalPages, +params.page || 1, 2);
        // console.log(this.pages);
      });
  }

  ngOnDestroy() {
    this.pageSub.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isEmpty = this.pageMeta?.empty === true ? true : false;
  }

  prevPage(): void {
    this.router.navigate(['/user'], {queryParams: {page: +this.pageMeta?.number}});
  }

  nextPage(): void {
    this.router.navigate(['/user'], {queryParams: {page: +this.pageMeta?.number + 2}});
  }

  currentPage(page: any) {
    if (page === '...') {
      return '';
    }
    return ((+page || 1) === this.pageMeta?.number + 1) ? 'pagination-active' : '';
  }

  getParams(p: any) {
    return p === '...' ? {page: this.pageMeta?.number + 1} : {page: p};
  }


}
