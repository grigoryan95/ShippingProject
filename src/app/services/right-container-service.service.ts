import { Injectable } from '@angular/core';
export interface Post {
  img: string,
  level1: string,
  level2: string,
  level3: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class RightContainerServiceService {
  textError: string = 'the field must be filled in correctly'
  arrObj: Post[] = [
    {
      img: 'assets/images/footer.png',
      level1: 'The Chelsea Boot',
      level2: 'Black',
      level3: 'Quantity: 1',
      price: 235
    },
    {
      img: 'assets/images/Bitmap.png',
      level1: 'The Twill Snap Backpack',
      level2: 'Reverse Denim + Brown leather',
      level3: 'Quantity: 1',
      price: 65
    },
    {
      img: 'assets/images/bag.png',
      level1: 'The Twill Zip Tote',
      level2: 'Reverse Denim + Black leather',
      level3: 'Quantity: 1',
      price: 48
    }
  ]

}
