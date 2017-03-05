import { CommonService } from './../main/common.service';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Refresh } from '../../decorators';


@Component({
  selector: 'app1-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component {
  @Input()
  title = 'Module 1 Loaded!!!';

  state: number;

  constructor(private service: CommonService, private change:ChangeDetectorRef) {
    this.state = service.state;
  }


  @Refresh()
  private increment(): number {
    this.state = this.service.increment();
    this.change.detectChanges();
    return this.state;
  }



}
