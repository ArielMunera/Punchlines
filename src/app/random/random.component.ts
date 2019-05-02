import { Component, OnInit } from '@angular/core';
import { PunchlinesService } from '../punchlines.service';
import { Router } from '@angular/router';
import { Punchline } from '../punchline';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  public punchlines: Punchline[];
  public randomPunchline: Punchline;

  constructor(param_punchlines: PunchlinesService) {
    this.punchlines = [];

    this.punchlines = param_punchlines.getPunchlines();
    this.randomPunchline = this.punchlines[Math.floor(Math.random() * Math.floor(this.punchlines.length))];
  }

  newRandom() {
    this.randomPunchline = this.punchlines[Math.floor(Math.random() * Math.floor(this.punchlines.length))];
  }

  ngOnInit() {
    this.newRandom();
  }

}
