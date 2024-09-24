import { CourseCardComponent } from './course-card/course-card.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Icourse } from './app.component.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , DemoComponent , CourseCardComponent,NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  data={
   id:'hello'
  };
  readonly course :Array<Icourse> = [
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
     
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      
      },
      {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
     
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      
      },
      {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      
      },
      
  ]
  beginerCourse=this.course[0]
  rxjxCourse=this.course[1]
  njxCourse=this.course[2]
  


  onLongClicked():void{
    alert('hello');
  }
  onKeyUP(title :string):void{
    this.title=title
  }
  onCourseClicked(course :Icourse):void{
    console.log('onCourseClicked' ,course.description);
    
  }
}
