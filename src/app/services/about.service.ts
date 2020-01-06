import { Injectable } from '@angular/core';
import { about, setAbout } from '../shared/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getAbout(): string{
    return about;
  }

  setAbout(a: string): void{
    setAbout(a);
  }
}
