import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getMenuList(){
    return this.http.get<any>(`${this.baseUrl}/getList`);
  }

  createNewMenuItem(menuId: string, itemName: string, newItem: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create-new-item?id=${menuId}&itemName=${itemName}`, newItem);
  }

  createNewMenu(newMenuData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create-new-menu`, newMenuData);
  }

  updateMenu(menuId: string, updatedMenuData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update-menu/${menuId}`, updatedMenuData);
  }

  updateItem(menuId: string, itemId: string, updatedItemData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update-item/${menuId}/${itemId}`, updatedItemData);
  }

  deleteItem(menuId: string, itemId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete-item/${menuId}/${itemId}`);
  }

  deleteMenu(menuId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete-menu/${menuId}`);
  }

}
