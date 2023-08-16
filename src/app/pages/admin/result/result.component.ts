import { Component, OnInit } from '@angular/core';
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

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.result = this.resultService.getResultByQuiz(this.qid).subscribe((data) =>{
      console.log(data);

    });


  }

}
