import { Component, OnInit, ViewChild } from '@angular/core';
import { Head } from '../shared/head';
import { Feedback } from '../shared/feedback';

import { MovieService } from '../services/movie.service';
import { FeedbackService } from '../services/feedback.service';
import { AboutService } from '../services/about.service';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id: string='';
  name: string;
  picSrc: string = "";
  releaseDate: string;
  rating: string;
  description: string;

  feedbacks: Feedback[];
  about: string = "";

  addMovieForm: FormGroup;
  @ViewChild('aForm', {static: false}) addMovieFormD;

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
    private feedbackService: FeedbackService,
    private aboutService: AboutService,
    private fb: FormBuilder) {
      this.createForm();
  }

  ngOnInit() {
    this.feedbacks = this.feedbackService.getFeedbacks();
    this.about = this.aboutService.getAbout();
  }

  removeMovie(id: string): void {
    this.movieService.removeMovie(id);
  }

  setAbout(): void {
    console.log(this.about);
    this.aboutService.setAbout(this.about);
  }

  addMovie(): void {
    this.id = (Number(this.movieService.getLastMovieId()) + 1).toString();
    this.name = this.addMovieForm.get('name').value;
    this.rating = this.addMovieForm.get('rating').value;
    this.releaseDate = this.addMovieForm.get('releaseDate').value;
    this.description = this.addMovieForm.get('description').value;
    this.movieService.addMovie(this.id, this.name, this.picSrc, this.rating + '/10', this.releaseDate, this.description);
    this.addMovieFormD.resetForm();
  }

  createForm(): void{
    this.addMovieForm = this.fb.group({
      name: ['', Validators.required],
      rating: ['', Validators.required],
      releaseDate: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
