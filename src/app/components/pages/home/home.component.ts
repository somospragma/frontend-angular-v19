import { CounterComponent } from '@/components/organisms/counter/counter.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
