import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, MenuComponent, GalleryComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Nirvana';
}
