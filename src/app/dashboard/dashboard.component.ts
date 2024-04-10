import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../services/auth-google.service';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar'
import { MatButton} from '@angular/material/button'
import { MatIcon} from '@angular/material/icon'

const MODULES = [CommonModule];
const MATERIAL = [MatToolbar,MatButton,MatIcon];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MODULES, MATERIAL],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  profile: any;
  title:string='GL1'

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.profile = this.authService.getProfile();
   //console.log(this.profile);
    if (this.profile) {
      console.log('profile :', this.profile);
    } else {
      console.log(this.profile);
    }
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
