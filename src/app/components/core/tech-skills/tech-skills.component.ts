import { Component } from '@angular/core';
import { HeadLineComponent } from '../../common/head-line/head-line.component';
import { ITechSkills } from '../../../interfaces/Itech-skills';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tech-skills',
  standalone: true,
  imports: [HeadLineComponent],
  templateUrl: './tech-skills.component.html',
  styleUrl: './tech-skills.component.css'
})
export class TechSkillsComponent {
  constructor(private _DomSanitizer: DomSanitizer) {}
  getSafeHTML(html: string): SafeHtml
  {
    return this._DomSanitizer.bypassSecurityTrustHtml(html)
  }
  CreateStarsArr(Rate: number): Array<any>
  {
    return new Array(Rate)
  }
  HeadLine: string = "Technical Skills"
  TechSkills: ITechSkills[] = [
    {
      Logo: '<i class="fa-brands fa-html5"></i>',
      Name: "HTML",
      Proficiency: "Expert",
      Rate: 5
    },
    {
      Logo: '<i class="fa-brands fa-css3-alt"></i>',
      Name: "CSS",
      Proficiency: "Expert",
      Rate: 5
    },
    {
      Logo: '<i class="fa-brands fa-square-js"></i>',
      Name: "JS",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-brands fa-bootstrap"></i>',
      Name: "Bootstrap",
      Proficiency: "Expert",
      Rate: 5
    },
    {
      Logo: '<i class="fa-solid fa-code"></i>',
      Name: "JQuery",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-code"></i>',
      Name: "TS",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-brands fa-angular"></i>',
      Name: "Angular",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-database"></i>',
      Name: "SQL",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-laptop-code"></i>',
      Name: "C#",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-terminal"></i>',
      Name: "EF Core",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-code-compare"></i>',
      Name: "Linq",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-database"></i>',
      Name: "Dapper",
      Proficiency: "Intermediate",
      Rate: 3
    },
    {
      Logo: '<i class="fa-solid fa-a"></i>',
      Name: "ASP.NET MVC",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-a"></i>',
      Name: "ASP.NET APIs",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-brands fa-github"></i>',
      Name: "Github",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: 'SOLID',
      Name: "Solid Principles",
      Proficiency: "Advanced",
      Rate: 4
    },
    {
      Logo: '<i class="fa-solid fa-pen-ruler"></i>',
      Name: "Design Patterns",
      Proficiency: "Intermediate",
      Rate: 3
    },
    {
      Logo: '<i class="fa-solid fa-box-open"></i>',
      Name: "Docker",
      Proficiency: "Intermediate",
      Rate: 3
    },
    {
      Logo: '<i class="fa-solid fa-tower-broadcast"></i>',
      Name: "SignalR",
      Proficiency: "Intermediate",
      Rate: 3
    }
  ]
}
