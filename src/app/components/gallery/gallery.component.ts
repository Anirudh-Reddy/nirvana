import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{
  public isDarkMode:boolean = false;
  constructor(private utilsService: UtilsService){}
  ngOnInit(): void {
    this.utilsService.darkMode$.subscribe({
      next:res=>{
        this.isDarkMode = res;
      } 
    })
  }
}
