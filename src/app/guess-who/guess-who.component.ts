import { Component, OnInit } from '@angular/core';
import { Punchline } from '../punchline';
import { PunchlinesService } from '../punchlines.service';

@Component({
  selector: 'app-guess-who',
  templateUrl: './guess-who.component.html',
  styleUrls: ['./guess-who.component.css']
})
export class GuessWhoComponent implements OnInit {

  public punchlines: Punchline[];
  public randomPunchline: Punchline;
  public authorAnswer: string = "";
  public colorClass: Boolean;

  constructor(private param_punchlines: PunchlinesService) {
    this.punchlines = [];
    this.authorAnswer = "";
    this.colorClass = null;

  }

  public newRandom() {
    this.randomPunchline = this.punchlines[Math.floor(Math.random() * Math.floor(this.punchlines.length))];
  }

  public answer(authorAnswer: string) {
    if (this.randomPunchline.author.toLowerCase().trim().includes(authorAnswer.toLowerCase().trim())) {
      document.getElementById("citation").classList.add('bg-success');
      let that = this;
      setTimeout(function () {
        document.getElementById("citation").classList.remove('bg-success');
        that.newRandom();
      }, 3000);
    } else {
      document.getElementById("citation").classList.add('bg-danger');
      setTimeout(function () {
        document.getElementById("citation").classList.remove('bg-danger');
      }, 3000);
    }
  }

  public ngOnInit() {
    this.param_punchlines.getPunchlines().subscribe(
      (param_pulchlines: Punchline[]) => {
        this.punchlines = param_pulchlines;
        this.randomPunchline = this.punchlines[Math.floor(Math.random() * Math.floor(this.punchlines.length))];
      }
    )
  }

}
