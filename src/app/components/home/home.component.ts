import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    const sr = ScrollReveal({
      distance : '65px',
      duration : 2600,
      delay : 450,
      reset : true
    })

    sr.reveal('.home_left',{delay:200, origin: 'top'});
    sr.reveal('.home_right',{delay:200, origin: 'top'});
  }

}
