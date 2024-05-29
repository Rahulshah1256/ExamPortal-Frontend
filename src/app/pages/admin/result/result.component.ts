import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result= null;
  results=[];
  qid;
  uid;

  constructor(private resultService: ResultService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.qid = this.route.snapshot.params['uid'];
    this.result = this.resultService.getResultByUserAndQuiz(this.qid, this.uid).subscribe((data) =>{
      console.log(data);
      this.result = data;

    });


  }

}

// this.qid = this.route.snapshot.params['qid'];
    // this.qid = this.route.snapshot.params['uid'];
    // this.resultService.getResultByUserAndQuiz(this.qid, this.uid).subscribe((data) =>{
    //   console.log(data);
    //   this.result = data;

    // });