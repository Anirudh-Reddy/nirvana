import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MenuItemsDialogComponent } from '../menu-items-dialog/menu-items-dialog.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MenuItemsDialogComponent],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent implements OnInit{
  @Input() menuItems:any;
  constructor(public dialog: MatDialog, private utilsService: UtilsService) {}

  ngOnInit(): void {}

  openDialog(item:any) {
    const dialogRef = this.dialog.open(MenuItemsDialogComponent);

    this.utilsService.updateRestaurantMenu(item);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
