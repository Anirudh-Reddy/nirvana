import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import restaurantMenu from '../../models/restaurant-menu.json';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { popularItems, menuTabImages } from '../../models/utils.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule, MatTabsModule, MenuItemsComponent, CommonModule, MatButtonModule, MatSidenavModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  public restaurantMenu:any = {};
  public menuTabImages:any = []
  public popularItems:any = [];
  
  constructor(){}
   
  ngOnInit(): void {
   this.restaurantMenu = restaurantMenu;
   this.menuTabImages = menuTabImages;
   this.popularItems = popularItems;
   setTimeout(()=>{
    const swiper = new Swiper('.tranding-slider', {
      modules: [Navigation, Pagination, EffectCoverflow],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
   },10);
  }
  
  getStarIcons(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return Array(fullStars).fill('star').concat(halfStar ? ['star_half'] : []).concat(Array(emptyStars).fill('star_border'));
  }

}
