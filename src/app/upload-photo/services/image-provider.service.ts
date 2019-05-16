import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {

  constructor(
    private firestore: AngularFirestore) { }

  getImage(userId: string) {

    var list:string[] = [];
    let photoRef = this.firestore.collection('PhotoManagement', ref => ref.where('uid', '==', userId).where('visible', '==', true));
    photoRef.get().forEach(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {

        var name:string = userId + '/' + doc.get('imageName');
        list.push(name);
        console.log(list);
      })
    })
    console.log(list);
    return list;
  }

  // not complete
  deleteImage(userId: string, imageName: string): any {

  }

  uploadImage(image: string, userId: string, locationValue: string, tripNameValue: string): any {
    let storageRef = firebase.storage().ref();
    let imageName = this.generateUUID();
    let imageRef = storageRef.child(`${userId}/${imageName}.jpg`);
    let data = {
      uid: userId,
      imageName: imageName + '.jpg',
      location: locationValue,
      tripName: tripNameValue,
      visible: true
    }
    this.firestore.collection('PhotoManagement').add(data);
    return imageRef.putString(image, 'data_url');
  }



  private generateUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
