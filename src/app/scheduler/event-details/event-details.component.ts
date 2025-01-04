import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css',
})
export class EventDetailsComponent {
  @Input({ required: true }) subject!: string;
  @Input({ required: true }) startTime!: Date;
  @Input({ required: true }) endTime!: Date;
}
