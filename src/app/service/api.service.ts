import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http: HttpClient) { }

  getProduct(){
    return this.Http.get<any>("https://fakestore.comproducts")
    .pipe(map((res:any) =>{
      return res
    }))
  }
}
