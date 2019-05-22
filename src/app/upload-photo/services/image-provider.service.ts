import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {
  images: any[];

  constructor(
    private firestore: AngularFirestore) { }

  getImage(userId: string) {
    try {
      let ref = this.firestore.collection('PhotoManagement');
      ref.ref.where('uid', '==', userId).where('visible', '==', true).get().then((_snapshot: any)=>{
        var result = [];
        _snapshot.forEach((_childSnapshot) => {
          // var element = _childSnapshot;
          firebase.storage().ref().child(userId + '/' + _childSnapshot.get('imageName')).getDownloadURL().then((url)=>{
          result.push(url); 
          });       
        });
        this.images = result;
      })
    } catch (e) {
      console.log(e);
    }
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
