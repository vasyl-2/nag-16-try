import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherServiceService {

  constructor() { }

  writeSmth(arg?: string): void {
    console.log('SMTH________________')
    if (arg) {
      console.log('RRRRRRRRRRRRRRRRRRRRRRRRRR')
    }
  }
}
