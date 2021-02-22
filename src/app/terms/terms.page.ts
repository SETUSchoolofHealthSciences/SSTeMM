import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(private go: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.go.navigate(['registration']);
  }
}
