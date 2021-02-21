import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = "http://usweb.dotomi.com/resources/swfs/cookies.json";

  getData() : Observable<any> {
    return this.http.get("url");
  }

  getLocalData() {
    return this.serverData;
  }

  serverData =    [
    {"name":"Chocolate Chip","price":"$2.49","category":"Standard"},{"name":"Sugar","price":"$1.79","category":"Standard"},{"name":"Snickerdoodle","price":"$2.49","category":"Standard"},{"name":"Oatmeal Raisin","price":"$2.99","category":"Standard"},{"name":"Peanut Butter","price":"$2.99","category":"Standard"},{"name":"White Chocolate Macadamia","price":"$3.99","category":"Premium"},{"name":"Red Velvet","price":"$3.49","category":"Premium"},
    {"name":"Black and White","price":"$3.49","category":"Premium"},{"name":"Triple Chocolate","price":"$3.99","category":"Premium"},{"name":"White Chocolate Coconut Divine","price":"$5.99","category":"Signature"},
    {"name":"Dark Chocolate Pistachio Sea Salt","price":"$5.49","category":"Signature"},
    {"name":"Brown Butter Bourbon Spice","price":"$5.49","category":"Signature"},
    {"name":"Bacon Chocolate Chip","price":"$5.99","category":"Signature"}
    ]

}
