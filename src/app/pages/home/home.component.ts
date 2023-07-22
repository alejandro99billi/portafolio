import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAboutMe(){
    this.router.navigate(['/about-me'])
  }

  goContactMe(){
    this.router.navigate(['/contact-me'])
  }

  goToProyects(){
    this.router.navigate(['/proyects'])
  }

}
