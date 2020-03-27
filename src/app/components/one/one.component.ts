import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user: string;
  editUser: string;

  // Inject the service
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    // subscribe to the observable in the service
    this.usersService.cast.subscribe(user => this.user = user);
  }

  editTheUser(url: string) {
    this.usersService.editUser(this.editUser);
    this.router.navigate(['/two']);
  }

}
