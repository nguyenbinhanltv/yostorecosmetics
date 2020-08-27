import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseOrders } from 'app/models/purchase-orders.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrdersService {

  constructor(
    public http: HttpClient
  ) { }

  getAllPurchaseOrders(): Observable<PurchaseOrders[]> {
    return this.http.get<PurchaseOrders[]>(environment.apiEndPoint + '/purchase-orders');
  }

  getPurchaseOrders(purchaseOrdersId: string): Observable<PurchaseOrders> {
    return this.http.get<PurchaseOrders>(environment.apiEndPoint + `/purchase-orders/${purchaseOrdersId}}`);
  }

  updatePurchaseOrders(purchaseOrdersId: string, data: PurchaseOrders): Observable<PurchaseOrders> {
    return this.http.patch<PurchaseOrders>(environment.apiEndPoint + `/purchase-orders/${purchaseOrdersId}`, data);
  }

  deletePurchaseOrders(purchaseOrdersId: string): Observable<PurchaseOrders> {
    return this.http.delete<PurchaseOrders>(environment.apiEndPoint + `/purchase-orders/${purchaseOrdersId}`);
  }
}
