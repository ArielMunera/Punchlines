import { Injectable } from '@angular/core';
import { punchlines } from '../assets/punchlines.json';
import { Punchline } from './punchline.js';

@Injectable({
  providedIn: 'root'
})
export class PunchlinesService {

  constructor() { }

  public getPunchlines(): Punchline[] {
    return punchlines;
  }
}
