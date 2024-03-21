import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private restaurantMenuSubject = new BehaviorSubject<any>(null);
  restaurantMenu$: Observable<any> = this.restaurantMenuSubject.asObservable();
  constructor() { }

  getRestaurantMenu(): any {
    return this.restaurantMenuSubject.getValue();
  }

  updateRestaurantMenu(menuItem: any): void {
    this.restaurantMenuSubject.next(menuItem);
  }
}
