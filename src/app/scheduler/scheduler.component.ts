import { Component, EventEmitter, Output } from '@angular/core';
import {
  ScheduleModule,
  ScheduleAllModule,
  EventClickArgs,
} from '@syncfusion/ej2-angular-schedule';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-scheduler',
  imports: [ScheduleModule, ScheduleAllModule],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.css',
})
export class SchedulerComponent {
  @Output() eventClicked = new EventEmitter<EventClickArgs>();
  data: object[] = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(),
      EndTime: new Date(new Date().setMinutes(100)),
    },
  ];

  eventSettings: EventSettingsModel = {
    dataSource: this.data,
  };

  onEventClick(args: EventClickArgs): void {
    this.eventClicked.emit(args);
  }
}
