import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.css']
})
export class AddMovieModalComponent implements OnInit {

localUrl: any[];
    showPreviewImage(event: any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.localUrl = event.target.result;
                console.log(this.localUrl);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

  constructor() { }

  ngOnInit() {
  }

}
