import { Component } from '@angular/core';
import { HeadLineComponent } from '../../common/head-line/head-line.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeadLineComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  HeadLine: string = "Contact";
  GmailContact: FormGroup = new FormGroup({
    Name: new FormControl(),
    UserEmail: new FormControl(),
    Subject: new FormControl(),
    MailBody: new FormControl()
  });

  Send(): void
  {
    emailjs.send( "service_lsgdd0k", "template_21pb6cu", this.GmailContact.value, {publicKey : "edgFS-Kd3dPi5NBi4"})
    .then(
      () => {
        Swal.fire({
        title: 'SENT!',
        text: 'Your Message Has Been Sent',
        icon: 'success'
        });
        this.GmailContact.reset();
      },
      () => {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
        });
      }
    )
  }
}
