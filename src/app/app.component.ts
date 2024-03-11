import {Component, OnInit} from '@angular/core';
import {SomeDataService} from "./services/some-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SomeDataService]
})
export class AppComponent implements OnInit {
  title = 'nag-16-try';
  constructor(private someDataService: SomeDataService) {
  }

  ngOnInit() {
    this.someDataService.write('call args')
  }
}
