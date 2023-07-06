import { Injectable } from '@angular/core';


export interface Image {
  path: string;
  title: string;
  description: string;
}
export class ImageServiceService {

  private images: Image[] =
  [
    {
      path: 'path',
      title: 'title',
      description: 'description'
    }
  ];

  private icons: Image[] = [
    {
      path: 'path',
      title: 'title',
      description: 'description'
    }
  ];

  constructor() { }

  getImages(): Image[] {
    return this.images;
  }
  getIcons(): Image[] {
    return this.icons;
  }
}
