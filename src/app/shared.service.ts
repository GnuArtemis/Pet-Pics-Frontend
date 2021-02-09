import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000"
  readonly Photourl = "http://127.0.0.1:8000/media/"

  constructor(private http: HttpClient) { }

  getAnimalList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/animal/')
  }

  addAnimal(val:any) {
    return this.http.post(this.APIUrl+'/animal/',val)
  }

  updateAnimal(val:any) {
    return this.http.put(this.APIUrl+'/animal/',val)
  }

  deleteAnimal(val:any) {
    return this.http.delete(this.APIUrl+'/animal/'+val)
  }

  UploadPhoto(val:any) {
    return this.http.post(this.APIUrl+'/SaveFile',val)
  }
}
