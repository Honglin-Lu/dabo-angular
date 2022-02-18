import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {style} from '@angular/animations';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  start = Date.now();
  ok: string;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => this.ok = event instanceof HttpResponse ? 'Ok' : '',
        (error: HttpEvent<any>) => this.ok = 'Failed',
      ),
      finalize(() => {
        const processTime = Date.now() - this.start;
        const msg = `${request.method} --- ${request.urlWithParams} --- ${this.ok} in ${processTime} ms`;

        if (this.ok === 'Ok') {
          console.log(`%c${msg}`, 'background: #469504; color: #fff;');
        } else {
          console.log(`%c${msg}`, 'background: #fd1531; color: #fff;');
        }
      }),
    );
  }
}
