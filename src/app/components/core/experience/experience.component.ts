import { Component } from '@angular/core';
import { HeadLineComponent } from '../../common/head-line/head-line.component';
import { IExperience } from '../../../interfaces/iexperience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [HeadLineComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  HeadLine: string = "Experience";
  Experties: IExperience[] = [
    {
      CompanyLogoUrl: "../assets/Photos/ITI logo.jpg",
      CompanyName: "Information Technology Institute (ITI)",
      Position: "Front-End Development Treniee",
      From: "7/2023",
      To: "9/2023",
      Description: "Completed a 2-month Front-End Development training at ITI, mastering HTML, CSS, JS, TS, Bootstrap, and Angular. Built responsive web apps, focusing on clean UI/UX and component-based architecture. Gained hands-on experience in debugging, and optimization. Passionate about creating dynamic, user-friendly interfaces with modern frameworks.",
      Technologies: ["HTML", "CSS", "JS", "TS", "Bootstrap", "Angular"]
    },
    {
      CompanyLogoUrl: "../assets/Photos/Route Logo.png",
      CompanyName: "Route IT Center",
      Position: "Front-End Development Treniee",
      From: "8/2023",
      To: "2/2024",
      Description: "Completed a 6-month intensive Front-End Development training at Route IT Center, mastering HTML, CSS, JS, TS, Angular, and Bootstrap. Developed responsive web apps using (Native-Angular), jQuery, and GitHub for version control. Strengthened skills in component-based architecture and modern workflows. Passionate about writing clean, efficient code for seamless user experiences.",
      Technologies: ["HTML", "CSS", "JS", "TS", "ES6", "Bootstrap", "JQuery", "Angular", "SCSS", "GitHub"]
    },
    {
      CompanyLogoUrl: "../assets/Photos/Route Logo.png",
      CompanyName: "Route IT Center",
      Position: "Back-End Development Treniee",
      From: "5/2024",
      To: "12/2024",
      Description: "Completed a 7-month Back-End Development training at Route IT Center, mastering C#, ASP.NET MVC, Web APIs, and database technologies (SQL, EF Core, Dapper). Applied SOLID principles and design patterns to build scalable, maintainable systems. Gained hands-on experience with Linq for data operations and RESTful API development. Passionate about crafting robust server-side architectures with clean, efficient code",
      Technologies: ["SQL", "C#", "Linq", "EF Core", "Dapper", "ASP.NET MVC", "ASP.NET Web APIs", "SOLID", "Design Pattern"]
    },
  ]
}
