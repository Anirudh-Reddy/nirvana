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

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule, MatTabsModule, MenuItemsComponent, CommonModule, MatButtonModule, MatSidenavModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  public restaurantMenu:any = {};
  public menuTabImages = [
    'appetizers.jpg',
    'soups.jpg',
    'tandoor.jpg',
    'vegetarian.jpg',
    'jain-food-animated-icon.png',
    'chicken-curry-animated-icon.png',
    'lamb.jpg',
    'seafood.jpg',
    'naan.jpg',
    'biriyani.jpg',
    'dessert.jpg',
    'beverages.jpg'
  ]
  public popularItems = [
    {
      foodName: 'Special Pizza',
      foodPrice: '$20',
      foodRating: 4.5,
      foodImage: 'tranding-food-1.png'
    },
    {
      foodName: 'Meat Ball',
      foodPrice: '$20',
      foodRating: 4.5,
      foodImage: 'tranding-food-2.png'
    },
    {
      foodName: 'Burger',
      foodPrice: '$40',
      foodRating: 4.5,
      foodImage: 'tranding-food-3.png'
    },
    {
      foodName: 'Fish Curry',
      foodPrice: '$15',
      foodRating: 4.5,
      foodImage: 'tranding-food-4.png'
    },
    {
      foodName: 'Pan Cake',
      foodPrice: '$15',
      foodRating: 4.5,
      foodImage: 'tranding-food-5.png'
    },
    {
      foodName: 'Vanilla Cake',
      foodPrice: '$20',
      foodRating: 4.5,
      foodImage: 'tranding-food-6.png'
    },
    {
      foodName: 'Blueberry Cake',
      foodPrice: '$8',
      foodRating: 4.5,
      foodImage: 'tranding-food-7.png'
    }
  ];
  
  constructor(){}
   
  ngOnInit(): void {
   this.restaurantMenu = restaurantMenu;
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
  
}
