import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stress-signature',
  templateUrl: './stress-signature.page.html',
  styleUrls: ['./stress-signature.page.scss'],
})
export class StressSignaturePage implements OnInit {

  public isDomainHidden = false;
  public isChoiceHidden = true;

  constructor(private go: Router) { }

  ngOnInit() {
  }

  pickDomain(){
    this.isDomainHidden = true;
    this.isChoiceHidden = false;
  }

  thoughts(){
    this.go.navigate(['/stress-questions']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  feelings(){
    this.go.navigate(['/stress-questions']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  behaviours(){
    this.go.navigate(['/stress-questions']);
    this.isDomainHidden = false;
    this.isChoiceHidden = true;
  }

  cancel(){
    this.go.navigate(['/home']);
  }

  save(){
    this.go.navigate(['/home']);
  }
}
