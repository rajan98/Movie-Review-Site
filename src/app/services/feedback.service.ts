import { Injectable } from '@angular/core';
import { FEEDBACK, Feedback } from '../shared/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  getFeedbacks(): Feedback[] {
    return FEEDBACK;
  }

  addFeedback(feedback: Feedback): void {
    FEEDBACK.push(feedback);
  }
}
