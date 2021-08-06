import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',    //defines the tag name//a tag with name 'courses' will be created
    template: `
    <img [src]="imageUrl"/>
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let i of courses">
            {{ i }}
            </li>
        </ul>

        <table>
            <tr>
                <td [attr.colspan]="colSpan">1</td>
            </tr>
        </table>
    `   //looping on courses
})
export class CoursesComponent {
    title = "List of Courses";
    imageUrl = 'https://www.w3schools.com/angular/pic_angular.jpg';
    colSpan = 2;
    courses;

    constructor(service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }
}