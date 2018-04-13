import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

}

const IMAGES = [
    {"id": 1, "category": "boats", "caption": "Random view 1", "url": "assets/img/1.JPG"},
    {"id": 2, "category": "boats", "caption": "Random view 1", "url": "assets/img/2.JPG"},
    {"id": 3, "category": "boats", "caption": "Random view 1", "url": "assets/img/3.JPG"},
    {"id": 4, "category": "camping", "caption": "Random view 2", "url": "assets/img/4.JPG"},
    {"id": 5, "category": "camping", "caption": "Random view 2", "url": "assets/img/5.JPG"},
    {"id": 6, "category": "camping", "caption": "Random view 2", "url": "assets/img/6.JPG"},
    {"id": 7, "category": "library", "caption": "Random view 3", "url": "assets/img/7.JPG"},
    {"id": 8, "category": "library", "caption": "Random view 3", "url": "assets/img/8.JPG"},
    {"id": 9, "category": "library", "caption": "Random view 3", "url": "assets/img/9.JPG"},
    {"id": 10, "category": "library", "caption": "Random view 3", "url": "assets/img/10.JPG"}
]