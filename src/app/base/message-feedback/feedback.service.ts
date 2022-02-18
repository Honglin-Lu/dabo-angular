import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig,
  NbToastrService,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  constructor(private toastrService: NbToastrService) { }

  public showFeedBack(isOk: boolean, body: string) {
    const config = {
      status: isOk ? 'success' : 'warning',
      hasIcon: true,
      icon: isOk ? 'checkmark-circle-outline' : 'alert-triangle-outline',
      destroyByClick: true,
      duration: 2000,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };

    const title = isOk ? 'Successful Operation' : 'Failed Operation';

    this.toastrService.show(
      body,
      title,
      config);
  }
}
