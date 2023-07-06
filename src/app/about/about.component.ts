import { Component } from '@angular/core';
import { ImageServiceService as ImageService, Icon } from '../image-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[ImageService]
})
export class AboutComponent {
  icons: Icon[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.icons = this.imageService.getIcons();

  }
}
