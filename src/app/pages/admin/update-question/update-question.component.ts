import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css'],
})
export class UpdateQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  question: any;
  qid: any;
  qtitle: any;
  quesId: any;

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quesId = this.route.snapshot.params.quesId;
    this.qtitle = this.route.snapshot.params.title;

    this.questionService.getQuestionsOfQuizForTest(this.quesId).subscribe(
      (data) => {
        console.log(data);
        this.question = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public updateSubmit() {
    this.questionService.updateQuestion(this.question).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Question is Updated', 'success').then((e) => {
          this.router.navigate(['/admin/quizzes/']);
        });
      },
      (error) => {
        this.snackbar.open('Question could not be updated', 'ok', {
          duration: 3000,
        });
      }
    );
  }
}
