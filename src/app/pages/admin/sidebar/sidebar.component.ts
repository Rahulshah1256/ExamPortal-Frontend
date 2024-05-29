import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  listItems = [
    { linkTitle: 'Home ', link: '/admin/profile', icon: 'home' },
    { linkTitle: 'Category', link: '/admin/categories', icon: 'category' },
    {
      linkTitle: 'Add Category',
      link: '/admin/add-category',
      icon: 'category',
    },
    { linkTitle: 'Quizzes', link: '/admin/quizzes', icon: 'list' },
    { linkTitle: 'Add Quiz', link: '/admin/add-quiz', icon: 'add' },
    // { linkTitle: 'Result', link: '/admin/result', icon: 'result' },
    // { linkTitle: 'Logout', link: '/', icon: 'login' },
  ];

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
}
