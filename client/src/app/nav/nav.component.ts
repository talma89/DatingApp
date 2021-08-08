import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    });
  }

  logout() {
    this.accountService.logout();
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
    }, error => {
      console.log(error);
    });
  }

}
