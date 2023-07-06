import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private images: string[] = [
    'path/do/obrazu1.jpg',
    'path/do/obrazu2.jpg',
    'path/do/obrazu3.jpg'
  ];

  constructor() { }

  getData(): string[] {
    return this.images;
  }
}
