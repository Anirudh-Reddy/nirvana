import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private restaurantMenuSubject = new BehaviorSubject<any>(null);
  restaurantMenu$: Observable<any> = this.restaurantMenuSubject.asObservable();

  private darkModeSubject = new BehaviorSubject<any>(false);
  darkMode$: Observable<any> = this.darkModeSubject.asObservable();

  constructor() { }

  getRestaurantMenu(): any {
    return this.restaurantMenuSubject.getValue();
  }

  updateRestaurantMenu(menuItem: any): void {
    this.restaurantMenuSubject.next(menuItem);
  }

  setDarkMode(flag: boolean): void {
    this.darkModeSubject.next(flag);
  }
}
