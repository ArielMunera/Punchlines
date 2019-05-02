import { Injectable } from '@angular/core';
import { Punchline } from './punchline.js';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PunchlinesService {

  constructor(private _http: HttpClient) {}

  public getPunchlines(): Observable<Punchline[]> {
    return this._http.get("./assets/punchlines.json").pipe(
      map(
        (param_data: any) => {
          return param_data.punchlines as Punchline[];
        }
      )
    );
  }
}
