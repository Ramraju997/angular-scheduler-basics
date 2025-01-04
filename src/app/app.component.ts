import { Component } from '@angular/core';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { EventDetailsComponent } from './scheduler/event-details/event-details.component';
import { EventClickArgs } from '@syncfusion/ej2-angular-schedule';

interface SchedulerEvent {
  Subject: string;
  StartTime: Date;
  EndTime: Date;
}

@Component({
  selector: 'app-root',
  imports: [SchedulerComponent, EventDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-scheduler';
  showEventDetails: boolean = false;
  eventName: string = '';
  startTime!: Date;
  endTime!: Date;

  onSchedulerEventClicked(args: EventClickArgs) {
    const event = args.event as SchedulerEvent;
    this.eventName = event.Subject;
    this.startTime = event.StartTime;
    this.endTime = event.EndTime;
    this.showEventDetails = true;
  }
}
