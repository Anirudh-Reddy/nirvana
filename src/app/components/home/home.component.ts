import { Component, OnDestroy, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  public languages = ['en', 'te', 'hi', 'ta', 'mr', 'gu', 'ml', 'kn', 'bn'];
  public currentLanguageIndex = 0;
  public welcomeMessages: { [key: string]: string } = {
    'en': 'Welcome to',
    'te': 'స్వాగతం',
    'hi': 'स्वागत हे',
    'ta': 'வரவேற்பு',
    'mr': 'स्वागत आहे',
    'gu': 'સ્વાગત છે',
    'ml': 'സ്വാഗതം',
    'kn': 'ಸ್ವಾಗತ',
    'bn': 'স্বাগত'
  };
  public welcomeMessage: string = '';
  private timerSubscription: Subscription | undefined;

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

    this.updateWelcomeMessage();

    this.timerSubscription = interval(2000).subscribe(() => {
      this.currentLanguageIndex = (this.currentLanguageIndex + 1) % this.languages.length;
      this.updateWelcomeMessage();
    });

  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  updateWelcomeMessage() {
    this.welcomeMessage = this.welcomeMessages[this.languages[this.currentLanguageIndex]];
  }

}
