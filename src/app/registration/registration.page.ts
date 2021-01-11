import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from '../services/authentication.service'
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"],
})
export class RegistrationPage implements OnInit {
  firstName: string = "";
  lastName: string = "";
  college: string = "";
  collegeYear: number = 1;
  hospital: string = "";
  email: string = "";
  password: string = "";
  passwordAgain: string = "";
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {}

  register() {
    this.auth.register(this.email, 
      this.password, this.firstName, this.lastName,  this.hospital, this.college, this.collegeYear)
  }
}
