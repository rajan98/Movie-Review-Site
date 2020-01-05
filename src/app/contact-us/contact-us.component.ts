import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { Feedback } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  userName: string;

  headerData: Head[];

  contactForm: FormGroup;
  contact: Feedback;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private feedbackService: FeedbackService) {
    this.createForm();
  }

  ngOnInit() {
    this.userName = this.route.snapshot.params['userName'];
    this.headerData = [
      {
        link: '/home/' + this.userName,
        name: 'Home',
        selected: false
      },
      {
        link: '/about/' + this.userName,
        name: 'About',
        selected: true
      },
      {
        link: '/contact/' + this.userName,
        name: 'Contact',
        selected: false
      },
      {
        link: '/login',
        name: 'Logout',
        selected: false
      }
    ];
  }
  createForm(): void {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]],
      feedback: ['', Validators.required]
    });
  }
  onSubmit() {
    this.contact = this.contactForm.value;
    this.feedbackService.addFeedback(this.contact);
    console.log(this.feedbackService.getFeedbacks());
  }
}
