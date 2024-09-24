import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icourse } from '../app.component.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course :Icourse={} as Icourse
  @Output("ViewCourseEvent") ViewCourseEmiter=new EventEmitter<Icourse>()
  viewCourse():void{
   this.ViewCourseEmiter.emit(this.course)
  }

}
