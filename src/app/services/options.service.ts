import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Image } from 'app/models/image.model';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(
    public http: HttpClient
  ) { }

  getOptions(): Observable<any> {
    return this.http.get(environment.apiEndPoint + '/options');
  }

  getOption(optionId: string): Observable<any> {
    return this.http.get(environment.apiEndPoint + `/options/${optionId}`);
  }

  createOption(option): Observable<any> {
    return this.http.post(environment.apiEndPoint + '/options', option);
  }

  updateOption(optionId: string, option): Observable<any> {
    return this.http.patch(environment.apiEndPoint + `/options/${optionId}`, option);
  }

  deleteProduct(optionId: string): Observable<any> {
    return this.http.delete<any>(environment.apiEndPoint + `/options/${optionId}`);
  }

  getImages() {
    return this.http.get<any>('assets/data/photos.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
  }
}
