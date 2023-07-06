import { Component } from '@angular/core';
import { ImageServiceService as ImageService } from '../image-service.service';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  providers: [ImageService]
})
export class WorksComponent {
  imageSrcs: string[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageSrcs = this.imageService.getData();
  }
}
