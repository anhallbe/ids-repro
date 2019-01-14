import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, scan } from 'rxjs/operators';
import { SohoToastService } from 'ids-enterprise-ng';

type Link = string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private logSubject = new Subject<string>();

  title = 'Links without delay';
  links$: Observable<Link[]> = of([
    'Non-delayed Link 1',
    'Non-delayed Link 2',
    'Non-delayed Link 3'
  ]);

  // Uncomment below to show working click listeners
  // title = 'Links with delay';
  // links$: Observable<Link[]> = of([
  //   'Delayed Link 1',
  //   'Delayed Link 2',
  //   'Delayed Link 3'
  // ]).pipe(delay(100));

  logs$: Observable<string[]> = this.logSubject.pipe(
    scan<string, string[]>((entries, entry) => [...entries, entry], []),
  );

  constructor(private toastService: SohoToastService) {}

  openLink(link: Link) {
    const logEntry = `${link} clicked!`;
    console.log(logEntry);
    this.logSubject.next(logEntry);
    this.toastService.show({
      title: 'It works!',
      message: logEntry,
      timeout: 1000
    });
  }
}
