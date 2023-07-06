import { Injectable } from '@angular/core';


export interface Image {
  path: string;
  title: string;
  description: string;
}
export interface Icon{
  iconPath: string,
  link: string,
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

  private icons: Icon[] = [
    {
      iconPath: 'path',
      link: 'title',
    }
  ];

  constructor() { }

  getImages(): Image[] {
    return this.images;
  }
  getIcons(): Icon[] {
    return this.icons;
  }
}
