import { Component } from '@angular/core';
import { ImageServiceService as ImageService } from '../image-service.service';
import { Image } from '../image-service.service';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  providers: [ImageService]
})
export class WorksComponent {
  images: Image[] = [];
  projectsNumber =0;
  i=0;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    if ( this.images[this.i] instanceof Object ) {
      this.projectsNumber++;
  }
  }
}
