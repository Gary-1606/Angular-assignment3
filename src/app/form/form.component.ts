import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType,
} from "@angular/common/http";

import { FormServices } from "../services/applicationform.services";
import { Router } from "@angular/router";
import { UserService } from "../guard/auth.guard";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  fileLink: Object = {};
  isformValid: boolean = true;

  countryList: string[] = [
    "India",
    "United States of America",
    "United Kingdom",
    "New Zealand",
    "Australia",
  ];

  designation: string[] = [
    "React Developer",
    "Angular Developer",
    "Software Development Engineer",
    "Software Engineer",
  ];

  applicationForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  country: FormControl;
  address: FormControl;
  position: FormControl;
  information: FormControl;
  file: FormControl;

  createFormControls() {
    this.firstName = new FormControl("", [Validators.required]);
    this.lastName = new FormControl("", [Validators.required]);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
    ]);
    this.phone = new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
    ]);
    this.country = new FormControl("", [Validators.required]);
    this.address = new FormControl("", [Validators.required]);
    this.position = new FormControl("", [Validators.required]);
    this.information = new FormControl("", [Validators.required]);
    this.file = new FormControl(null, [Validators.required]);
  }
  createForms() {
    this.applicationForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      country: this.country,
      address: this.address,
      position: this.position,
      information: this.information,
      file: this.file,
    });
  }

  constructor(
    private _formServices: FormServices,
    private router: Router,
    private _userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    console.log(this.applicationForm);
    this.createFormControls();
    this.createForms();
    this.firstName.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        console.log(term);
      });
  }

  resetForm() {
    this.applicationForm.reset();
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      this._formServices.formDetails = { ...this.applicationForm.value };
      this._formServices.uploadedFileLink = this.fileLink;
      this._userService.isLoggedIn = true;
      this.router.navigate(["display"]);
    } else {
      this.isformValid = !this.isformValid;
    }
  }

  upload(files: File[]) {
    var formData = new FormData();
    Array.from(files).forEach((f) => formData.append("file", f));

    this.http
      .post("https://file.io", formData, {
        reportProgress: true,
        observe: "events",
      })
      .subscribe((event) => {
        if (event instanceof HttpResponse) {
          this.fileLink = event.body;
        }
      });
  }
}
