import { Injectable } from '@angular/core';


export interface Image {
  path: string;
  title: string;
  description: string;
  link: string;
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
      description: 'description',
      link: 'link',
    }
  ];

  private icons: Icon[] = [
    {
      iconPath: 'path',
      link: 'link',
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
