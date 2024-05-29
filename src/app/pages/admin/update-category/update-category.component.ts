import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  categories: any;
  cid: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cid = this.route.snapshot.params['cid'];
    this.categoryService.getCategory(this.cid).subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }

  updateCategory() {
    if (this.categories.title.trim() == '' || this.categories.title == null) {
      this.snackbar.open('Title is required', 'Ok', {
        duration: 3000,
      });

      return;
    }
    if (
      this.categories.description.trim() == '' ||
      this.categories.description == null
    ) {
      this.snackbar.open('Description is required', 'Ok', {
        duration: 3000,
      });

      return;
    }
    this.categoryService.updateCategory(this.categories).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Category is Updated', 'success').then((e) => {
          this.router.navigate(['/admin/categories']);
        });
      },
      (error) => {
        this.snackbar.open('Category could not be updated', 'Ok', {
          duration: 3000,
        });
      }
    );
  }
}
