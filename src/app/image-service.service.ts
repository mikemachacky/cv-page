import { Injectable } from '@angular/core';


export interface Image {
  path: string;
  title: string;
  description: string;
  link: string;
}
export interface Icon{
  iconPath: string,
  link: string | null,
}
export interface Social extends Icon{
  iconLink:string | null;
}
export class ImageServiceService {

  private images: Image[] =
  [
    {
      path: '/assets/pics/something.png',
      title: 'CSS',
      description: 'description',
      link: 'link',
    }
  ];

  private icons: Icon[] = [
    {iconPath: '/assets/pics/html-5.png',
      link: 'https://www.flaticon.com/free-icons/html-5',},
    {iconPath: '/assets/pics/css.png',
      link: 'https://www.flaticon.com/free-icons/css',},
      {iconPath: '/assets/pics/js.png',
      link:"https://www.flaticon.com/free-icons/javascript",},
      {iconPath: '/assets/pics/php.png',
      link:'https://www.flaticon.com/free-icons/php',},
      {iconPath: '/assets/pics/angular.png',
      link:null,},

  ];
  private social: Social[] = [
    {iconPath: '/assets/pics/github-sign.png',
    link: 'https://github.com/mikemachacky',
    iconLink: 'https://www.flaticon.com/free-icons/github' },
    {iconPath: '/assets/pics/linkedin.png',
    link: 'https://github.com/mikemachacky',
    iconLink: 'https://www.flaticon.com/free-icons/linkedin' },
  ];
  constructor() { }

  getImages(): Image[] {
    return this.images;
  }
  getIcons(): Icon[] {
    return this.icons;
  }
  getSocial(): Icon[] {
    return this.social;
  }
}
