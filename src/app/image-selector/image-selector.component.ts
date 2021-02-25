import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent implements OnInit {
  images: any;
  selectedImg: number;
  constructor() {}

  ngOnInit(): void {
    this.images = [
      {
        id: 1,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsYftFv9blkzbYeJ6_7rR5tGbIFF1XL96hw&usqp=CAU',
        title: 'image 1',
        show: true,
      },
      {
        id: 2,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3rMkBsb5uWp6mPokPNiLapYhMk5P5wpdYQ&usqp=CAU',
        title: 'image 2',
        show: false,
      },
      {
        id: 3,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEh9o7qCXBxNc-nvZZ_ACWmIznYodjAu5O3w&usqp=CAU',
        title: 'image 3',
        show: false,
      },
      {
        id: 4,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvFW6GtrdTrF9djU9QoaR0zIbuSFUW5uIeg&usqp=CAU',
        title: 'image 4',
        show: false,
      },
      {
        id: 13,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsYftFv9blkzbYeJ6_7rR5tGbIFF1XL96hw&usqp=CAU',
        title: 'image 13',
        show: false,
      },
      {
        id: 22,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3rMkBsb5uWp6mPokPNiLapYhMk5P5wpdYQ&usqp=CAU',
        title: 'image 22',
        show: false,
      },
      {
        id: 32,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEh9o7qCXBxNc-nvZZ_ACWmIznYodjAu5O3w&usqp=CAU',
        title: 'image 32',
        show: false,
      },
      {
        id: 42,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvFW6GtrdTrF9djU9QoaR0zIbuSFUW5uIeg&usqp=CAU',
        title: 'image 42',
        show: false,
      },
    ];
  }
  // generateImages() {
  //   let images = '';
  //   for (let i = 0; i < this.images.length; i++) {
  //     images = images + `<img src="${this.images[i].url}">`;
  //   }
  //   return images;
  // }
  selectImage(e) {
    this.selectedImg = e.target.value;
    console.log(e.target.value);
    e = e.target.value;
    this.images.forEach((image) => {
      image.show = image.id == e ? true : false;
    });
  }
}