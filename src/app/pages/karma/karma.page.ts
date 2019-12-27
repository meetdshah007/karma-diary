import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-karma',
  templateUrl: './karma.page.html',
  styleUrls: ['./karma.page.scss'],
})
export class KarmaPage implements OnInit, OnDestroy {
  defaultMargin = '125%';
  percentage = `101%`;
  percentage2 = `101%`;
  percentage3 = `101%`;
  actualPercentage = 100;
  actualPercentage2 = 100;
  actualPercentage3 = 100;

  unsub$: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    this.resetAll();
    timer(0, 3000)
      .pipe(takeUntil(this.unsub$))
      .subscribe(() => this.segmentChanged(null));
  }

  segmentChanged(value) {
    this.resetAll();
    this.actualPercentage = parseInt((Math.random() * 100).toFixed(0));
    this.actualPercentage2 = parseInt((Math.random() * 100).toFixed(0));
    this.actualPercentage3 = parseInt((Math.random() * 100).toFixed(0));
    this.render();
  }

  render() {
    setTimeout(() => {
      const count = this.actualPercentage;
      const count2 = this.actualPercentage2;
      const count3 = this.actualPercentage3;
      this.percentage = `${count}%`;
      this.percentage2 = `${count2}%`;
      this.percentage3 = `${count3}%`;
    }, 300);
  }

  resetAll() {
    this.percentage = this.defaultMargin;
    this.percentage2 = this.defaultMargin;
    this.percentage3 = this.defaultMargin;
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
