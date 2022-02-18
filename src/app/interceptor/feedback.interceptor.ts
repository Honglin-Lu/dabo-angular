import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse,
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {FeedbackService} from '../base/message-feedback/feedback.service';

@Injectable()
export class FeedbackInterceptor implements HttpInterceptor {

  constructor(private feedbackService: FeedbackService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      mergeMap((event) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.status === 200 && event.body.status === 100 ) {
            this.feedbackService.showFeedBack(true, event.body.message);
            // return of(JSON.parse(event.body.data));
            // return of(event.body.data);
          } else {
            this.feedbackService.showFeedBack(false, event.body.message);
            // return of(null);
          }
        }
        return of(event);
      }),
    );
  }
}
