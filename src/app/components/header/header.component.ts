import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { UtilsService } from '../../services/utils.service';
import { ModeToggleComponent } from '../mode-toggle/mode-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIcon, CommonModule, ModeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public showNavTabs:Boolean = false;
  isDarkMode = false

  constructor(private utilsService: UtilsService){}

  showNav(){
    this.showNavTabs = !this.showNavTabs;
  }

  toggleMode(){
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode)
    this.utilsService.setDarkMode(this.isDarkMode);
  }
}
