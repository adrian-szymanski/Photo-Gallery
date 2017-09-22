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
    {"id": 1, "category": "boats", "caption": "View from a boats", "url": "assets/img/1.JPG"},
    {"id": 2, "category": "boats", "caption": "View from a boats", "url": "assets/img/2.JPG"},
    {"id": 3, "category": "boats", "caption": "View from a boaty", "url": "assets/img/3.JPG"},
    {"id": 4, "category": "camping", "caption": "View from a boate", "url": "assets/img/4.JPG"},
    {"id": 5, "category": "camping", "caption": "View from a boatq", "url": "assets/img/5.JPG"},
    {"id": 6, "category": "camping", "caption": "View from a boatu", "url": "assets/img/6.JPG"},
    {"id": 7, "category": "library", "caption": "View from a boati", "url": "assets/img/7.JPG"},
    {"id": 8, "category": "library", "caption": "View from a boato", "url": "assets/img/8.JPG"},
    {"id": 9, "category": "library", "caption": "View from a boatj", "url": "assets/img/9.JPG"},
    {"id": 10, "category": "library", "caption": "View from a boata", "url": "assets/img/10.JPG"}
]