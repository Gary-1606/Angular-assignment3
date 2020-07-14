import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormServices {
  public formDetails: Object = {};
  public uploadedFileLink: any;
  constructor() {}
}
