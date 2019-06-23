import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetImageService {
    photos = [];
     photo;
    private data = 'assets/photos.json';

    // constructor(private http:HttpClient) {
    //     this.getJson().subscribe(data => {
    //         this.photoData= data;
    //     });
    // }


    // public getJson():Observable<any> {
    //     return this.http.get(this.data);
    // }

    getPhotos() {
        return this.photos = photoData.slice(0);
    }
    getUsers(id:number) {
        return photoData.slice(0).find(user => user.id == id);
    }

    getPhoto(id: number) {
                for(let i = 0; i<photoData.length; i++)
        {
            this.photo = photoData[i].albums.slice(0).find(photo => photo.photoid == id);
            if(this.photo !== undefined) {
                break;
            }
        }
        return this.photo;
    }


}
const photoData = [
    {
        "id": 1,
        "username": "Alex",
        "albums":
            [
                {
                    "photoid": 1,
                    "imageUrl": "https://via.placeholder.com/600/771796",
                    "title": "wildlife picture 1",
                    "date": "17-10-2018",
                    "category": "wildlife"
                },
                {
                    "photoid": 2,
                    "imageUrl": "https://via.placeholder.com/600/24f355",
                    "title": "nature picture 1",
                    "date": "17-10-2018",
                    "category": "nature"
                },
                {
                    "photoid": 3,
                    "imageUrl": "https://via.placeholder.com/600/f66b97",
                    "title": "nature picture 2",
                    "date": "17-10-2018",
                    "category": "nature"
                }]
    },
    {
        "id": 2,
        "username": "Ben",
        "albums":
            [
                {
                    "photoid": 4,
                    "imageUrl": "https://via.placeholder.com/600/56a8c2",
                    "title": "nature picture 3",
                    "date": "17-10-2018",
                    "category": "nature"
                },
                {
                    "photoid": 5,
                    "imageUrl": "https://via.placeholder.com/600/51aa97",
                    "title": "wildlife picture 4",
                    "date": "17-10-2018",
                    "category": "wildlife"
                },
                {
                    "photoid": 6,
                    "imageUrl": "https://via.placeholder.com/600/810b14",
                    "title": "nature picture 4",
                    "date": "17-10-2018",
                    "category": "nature"
                },
                {
                    "photoid": 7,
                    "imageUrl": "https://via.placeholder.com/600/66b7d2",
                    "title": "nature picture 5",
                    "date": "17-10-2018",
                    "category": "nature"
                },
                {
                    "photoid": 8,
                    "imageUrl": "https://via.placeholder.com/600/61a65",
                    "title": "wildlife picture 5",
                    "date": "17-10-2018",
                    "category": "wildlife"
                }
            ]
    }
]