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
  public colorClass: string;

  constructor(param_punchlines: PunchlinesService) {
    this.punchlines = [];
    this.authorAnswer = "";
    
    this.punchlines = param_punchlines.getPunchlines();
    this.randomPunchline = this.punchlines[Math.floor(Math.random() * Math.floor(this.punchlines.length))];
  }

  answer(authorAnswer: string) {
    if (authorAnswer.toLowerCase().trim() === this.randomPunchline.author.toLowerCase().trim()) {
      this.colorClass = "bg-success";
      setTimeout(function () {
      }, 3000);
    } else {
      this.colorClass = "bg-danger";
    }
  }

  ngOnInit() {
  }

}
