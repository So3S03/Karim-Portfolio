import { Component } from '@angular/core';
import { HeadLineComponent } from '../../common/head-line/head-line.component';
import { IEducation } from '../../../interfaces/ieducation';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [HeadLineComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  HeadLine: string = "Education";
  Education: IEducation = 
  {
    UniversityLogoUrl: "../assets/Photos/Ain-Shams-University.jpg",
    Faculty: "Faculty of Arts",
    University: "Ain Shams University",
    Degree: "Bachelor's Degree",
    GPA: 3.64,
    GraduationYear: 2024,
    Description : "Graduated from Faculty of Arts, Ain Shams University with a degree in Philosophical Studies, specializing in critical thinking, logic, and political philosophy. Developed strong analytical and problem-solving skills through rigorous theoretical study. Passionate about examining complex ideas and societal structures. Able to apply structured reasoning to diverse challenges."
  }
}
