import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  currentDateTime: Date = new Date();
  weatherData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);

    this.fetchWeather();

  }

  fetchWeather(): void {
    const apiKey = 'b984caeed047bb6a99f387bd90b5a4de';
    const city = 'Los Angeles';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        console.error('Error fetching weather:', err);
      }
    });
  }
}