import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

   properties = signal<Property[]>([
    {
      id: 1,
      title: 'Modern City Loft',
      price: 1800,
      image: '1.jpeg',
      description: 'Sleek 1-bedroom loft with open floor plan and city views.',
    },
    {
      id: 2,
      title: 'Charming Countryside Cottage',
      price: 2200,
      image: '2.jpeg',
      description: 'Cozy 3-bedroom cottage with a lush garden and fireplace.',
    },
    {
      id: 3,
      title: 'Luxury Beachfront Villa',
      price: 6500,
      image: '3.jpeg',
      description:
        'Stunning 4-bedroom villa with private beach access and infinity pool.',
    },
    {
      id: 4,
      title: 'Urban Studio Apartment',
      price: 1200,
      image: '4.jpeg',
      description:
        'Compact studio with modern amenities, perfect for young professionals.',
    },
    {
      id: 5,
      title: 'Mountain Retreat Cabin',
      price: 3000,
      image: '5.jpeg',
      description: 'Rustic 2-bedroom cabin with breathtaking mountain views.',
    },
  ]);
}
