import { Component } from "@angular/core";

@Component({
    selector: 'courses',    //defines the tag name//a tag with name 'courses' will be created
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let i of courses">
            {{ i }}
            </li>
        </ul>
    `   //looping on courses
})
export class CoursesComponent {
    title = "List of Courses";
    courses = ["Course1", "Course2", "Course3"];

    /*
    getTitle() {
        return this.title;
    }
    */

}