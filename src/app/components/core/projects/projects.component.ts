import { Component } from '@angular/core';
import { IProject} from '../../../interfaces/Iproject';
import { HeadLineComponent } from '../../common/head-line/head-line.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeadLineComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  Projects: IProject[] = 
  [
    {
      Name: " Qoute Generator",
      Description: "A Simple Web Page with Native JS Logic Generating Random Qoutes for Famous Persons",
      PhotoUrl: "./assets/Photos/Qoute-Generator.jpg",
      UsedTech: ["HTML", "CSS", "JS"],
      SourceCodeUrl : "https://github.com/So3S03/quote_generator"
    },
    {
      Name: "Danieals Portfolio",
      Description: "A Simple Portfolio Developed with Bootstrap Library and JS Logic",
      PhotoUrl: "../assets/Photos/Daniels-Portfolio.jpg",
      UsedTech: ["HTML", "CSS", "JS", "Bootstrap", "Typed JS Lib"],
      SourceCodeUrl : "https://github.com/So3S03/Daniels_Portfolio",
      LiveDemoUrl: "https://so3s03.github.io/Daniels_Portfolio/"
    },
    {
      Name: "DevFolio Portfolio",
      Description: "A Simple Portfolio Developed with Bootstrap Library and JS Logic",
      PhotoUrl: "../assets/Photos/DevFolio-Portfolio.jpg",
      UsedTech: ["HTML", "CSS", "JS", "Bootstrap", "Typed JS Lib"],
      SourceCodeUrl : "https://github.com/So3S03/DevFolio_Portfolio",
      LiveDemoUrl: "https://so3s03.github.io/DevFolio_Portfolio/"
    },
    {
      Name: "Mealify Restaurant",
      Description: "A Simple Restaurant Page Developed with Native JS Logic",
      PhotoUrl: "../assets/Photos/Mealify-Restaurant.jpg",
      UsedTech: ["HTML", "CSS", "JS"],
      SourceCodeUrl : "https://github.com/So3S03/Mealify_Restaurant_Page",
      LiveDemoUrl: "https://so3s03.github.io/Mealify_Restaurant_Page/"
    },
    {
      Name: "JS CRUD System",
      Description: "A Crud System Page Developed with Native JS Logic and Bootstrap",
      PhotoUrl: "../assets/Photos/Js-CRUD-System.jpg",
      UsedTech: ["HTML", "CSS", "JS", "Bootstrap"],
      SourceCodeUrl : "https://github.com/So3S03/Crud-System",
      LiveDemoUrl: "https://so3s03.github.io/Crud-System/"
    },
    {
      Name: "Book Marker",
      Description: "A Book Marker Page used to store the most visted websites Developed with Native JS Logic and Bootstrap",
      PhotoUrl: "../assets/Photos/Bookmarker.jpg",
      UsedTech: ["HTML", "CSS", "JS", "Bootstrap"],
      SourceCodeUrl : "https://github.com/So3S03/BookMarker",
      LiveDemoUrl: "https://so3s03.github.io/BookMarker/"
    },
    {
      Name: "Weather App",
      Description: "A Weather Website used to show the weather forecast Developed with Native JS Logic and Bootstrap",
      PhotoUrl: "../../../../assets/Photos/Weather-Forecasting-App.jpg",
      UsedTech: ["HTML", "CSS", "JS", "Bootstrap"],
      SourceCodeUrl : "https://github.com/So3S03/Weather_API"
    },
    {
      Name: "Games Application",
      Description: "An Game Website used to show the most famous Games Developed with Native JS Logic and Bootstrap",
      PhotoUrl: "../assets/Photos/Games-App.jpg",
      UsedTech: ["HTML", "CSS", "JS", "Bootstrap", "JQuery"],
      SourceCodeUrl : "https://github.com/So3S03/Games-Application",
      LiveDemoUrl: "https://so3s03.github.io/Games-Application/"
    },
    {
      Name: "Yummy Meals",
      Description: "An recipes Website used to show meals Recipes like cooking guid Developed with Native JS Logic, Bootstrap and JQuery",
      PhotoUrl: "../assets/Photos/Yummy-Meals-Recipes.jpg",
      UsedTech: ["HTML", "CSS", "JS", "Bootstrap", "JQuery"],
      SourceCodeUrl : "https://github.com/So3S03/Yummy-Meals",
      LiveDemoUrl: "https://so3s03.github.io/Yummy-Meals/"
    },
    {
      Name: "E-Commerce Front-end App",
      Description: "An ECommerce Website used to show Products and sell it Developed with Angular, TS Logic, Bootstrap and JQuery",
      PhotoUrl: "../assets/Photos/FreshCart-ECommerce.jpg",
      UsedTech: ["HTML", "CSS", "TS", "Bootstrap", "JQuery", "Angular"],
      SourceCodeUrl : "https://github.com/So3S03/eComm",
      LiveDemoUrl: "https://so3s03.github.io/eComm/"
    },
    {
      Name: "Examination System",
      Description: "An Examination console System used by Teachers and Students to make - solve Exams Developed with C# Language",
      PhotoUrl: "../assets/Photos/Examination-System.jpg",
      UsedTech: ["C#"],
      SourceCodeUrl : "https://github.com/So3S03/Examination-System"
    },
    {
      Name: "MVC CRUD System",
      Description: "An Crud Systems used to add - show - edit - delete data from database Developed with C# - SQL Languages with N-Layers Archtechture",
      PhotoUrl: "../assets/Photos/MVC-Crud-System.jpg",
      UsedTech: ["C#", "SQL", "ASP.NET Core", "MVC", "Entity Framework", "Linq", "HTML", "CSS", "JS"],
      SourceCodeUrl : "https://github.com/So3S03/CRUD-System-MVC"
    },
    {
      Name: "ECommerce APIs",
      Description: "An ECommerce Website used to show Products and sell it Developed with ASP.NET Techs with N-Layers Archtechture",
      PhotoUrl: "../assets/Photos/ECommerce-APIs.jpg",
      UsedTech: ["C#", "SQL", "ASP.NET Core", "ASP.NET Web APIs", "Entity Framework", "Linq"],
      SourceCodeUrl : "https://github.com/So3S03/E-Commerece-APIs"
    },
    
  ]

  HeadLine: string = "Projects"
}
