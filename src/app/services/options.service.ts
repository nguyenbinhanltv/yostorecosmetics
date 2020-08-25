import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(
    private http: HttpClient
  ) { }

  getOptions(): Observable<any> {
    return this.http.get<any>(environment.apiEndPoint + '/options');
  }

  getOption(optionId: string): Observable<any> {
    return this.http.get<any>(environment.apiEndPoint + `/options/${optionId}`);
  }

  createOption(option): Observable<any> {
    return this.http.post<any>(environment.apiEndPoint + '/options', option);
  }

  updateOption(optionId: string, option): Observable<any> {
    return this.http.patch<any>(environment.apiEndPoint + `/options/${optionId}`, option);
  }

  deleteProduct(optionId: string): Observable<any> {
    return this.http.delete<any>(environment.apiEndPoint + `/options/${optionId}`);
  }
}
