import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { Feedback } from '../shared/feedback';

import { MovieService } from '../services/movie.service';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  feedbacks: Feedback[];

  headerData: Head[] = [
    {
      link: '/admin',
      name: 'Admin Home',
      selected: true
    },
    {
      link: '/login',
      name: 'Logout',
      selected: false
    }
  ];

  constructor(private movieService: MovieService,
    private feedbackService: FeedbackService) {
  }

  ngOnInit() {
    this.feedbacks = this.feedbackService.getFeedbacks();
  }

  removeMovie(id: string): void {
    this.movieService.removeMovie(id);
  }

}
