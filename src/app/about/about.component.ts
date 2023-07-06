import { Component } from '@angular/core';
import { ImageServiceService as ImageService } from '../image-service.service';
import { Image } from '../image-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[ImageService]
})
export class AboutComponent {
  icons: Image[] = [];
  projectsNumber =0;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.icons = this.imageService.getIcons();

  }
}
