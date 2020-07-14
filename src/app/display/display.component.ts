import { Component, OnInit } from "@angular/core";
import { FormServices } from "../services/applicationform.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  applicationFormDetails: Object = {};
  fileLink: any;

  constructor(private _formServices: FormServices, private router: Router) {}

  ngOnInit() {
    this.applicationFormDetails = { ...this._formServices.formDetails };
    this.fileLink = this._formServices.uploadedFileLink.link;
  }
  onApplicationSubmit() {
    this.router.navigate(["success"]);
  }
}
