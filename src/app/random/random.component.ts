import { Component, OnInit } from '@angular/core';
import { PunchlinesService } from '../punchlines.service';
import { Punchline } from '../punchline';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  public punchlines: Punchline[];
  public randomPunchline: Punchline;

  constructor(private param_punchlines: PunchlinesService) {
    this.punchlines = [];

  }

  newRandom() {
    this.randomPunchline = this.punchlines[Math.floor(Math.random() * Math.floor(this.punchlines.length))];
  }

  ngOnInit() {
    this.newRandom();
    this.param_punchlines.getPunchlines().subscribe(
      (param_pulchlines: Punchline[]) => {
        this.punchlines = param_pulchlines;
        this.randomPunchline = this.punchlines[Math.floor(Math.random() * Math.floor(this.punchlines.length))];
      }
    )
  }

}
