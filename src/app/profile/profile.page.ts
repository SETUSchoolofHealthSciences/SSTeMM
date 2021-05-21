import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('scanlop profile did enter');
  }

  ionViewDidEnter(){
    console.log('scanlop profile did enter');
  }

  ionViewWillLeave(){
    console.log('scanlop profile will leave');
  }

  ionViewDidLeave(){
    console.log('scanlop profile did leave');
  }
}
