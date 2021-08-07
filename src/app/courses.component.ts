import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',    //defines the tag name //a tag with name 'courses' will be created
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
        <div (click)="onDivClick">
            <p>Bootstrap Button Example with class binding and Style binding</p>
            <button
                class="btn btn-primary"
                [class.active]="isActive" 
                [style.backgroundColor]="isActive ? 'red' : 'grey'"
                (click)="onClick($event)">
                Save
            </button>
        </div>
        <br/>
        <div>
            <label>Event Filtering & One-way Binding :</label>
            <input #email (keyup.enter)="onKeyUp(email.value)" />
        </div>
        <div>
            <label>Two-way Binding :</label>
            <input [(ngModel)]="emailId" (keyup.enter)="onPressEnter()"/>
        </div>
        <div>
            <p>Pipe Example in Angular</p>
            {{ course.title | uppercase}} <br/>
            {{ course.students | number}} <br/>
            {{ course.rating | number:'1.2-2'}} <br/>
            {{ course.price | currency:'INR':true:'3.1-1'}} <br/>
            {{ course.releaseDate | date:'mediumDate'}}
        </div>

    `
})
export class CoursesComponent {
    title = "List of Courses";
    imageUrl = 'https://www.w3schools.com/angular/pic_angular.jpg';
    colSpan = 2;
    courses;
    isActive = true;
    emailId = "any@email.com";

    constructor(service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses()
    }

    course = {
        title: "The Complete Angular Course",
        rating: 4.975,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2021, 8, 7)
    }

    //onClick method
    onClick($event: any) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClick() {
        console.log("Div is Clicked");
    }

    //On Press Enter
    onKeyUp(email: any) {
        console.log("Enter is pressed. Email entered: " + email);
    }

    onPressEnter() {
        console.log("Email is " + this.emailId);
    }
}