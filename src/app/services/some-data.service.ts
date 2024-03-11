import {Injectable, Injector, Optional} from '@angular/core';
import {OtherServiceService} from "./other-service.service";
import {bound, logWithPrefix} from "../decorators/method-decorators/write-name";

@Injectable({
  providedIn: 'root'
})
export class SomeDataService {

  constructor(
    // @Optional() works for now only if   "experimentalDecorators": true, is uncommented, due to TS 5 >
    // @Optional() private otherServiceService: OtherServiceService
    private otherServiceService: OtherServiceService
  ) { }

  @logWithPrefix({ prefix: 'TEST---PREFIX', data: { someInner: 77 }})
  // @bound
  write(arg?: string) {
    this.otherServiceService.writeSmth(arg)
  }

  doSmth() {
    console.log('HI_____________________')
  }
}
