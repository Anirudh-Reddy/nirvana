import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UtilsService } from '../../services/utils.service';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-items-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIcon, CommonModule],
  templateUrl: './menu-items-dialog.component.html',
  styleUrl: './menu-items-dialog.component.scss'
})
export class MenuItemsDialogComponent implements OnInit{
  public menuItem:any = {};
  public isDarkMode:boolean = false

  constructor(private utilsService: UtilsService){}

  ngOnInit(): void {
    this.utilsService.restaurantMenu$.subscribe({
      next:res =>{
        this.menuItem = res;
      }
    })
  }

}
