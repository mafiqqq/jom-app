import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service'; 
import { ProfileService } from '../services/user/profile.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public userProfile: any;
  public birthDate: Date;
  public contact: string;

  constructor(
    private alertCtrl: AlertController,
    private authService: AuthenticateService,
    private profileService: ProfileService,
    private router: Router
  ) { }

  profile() {
    this.router.navigateByUrl('/tabs/tab5');
  }

  ngOnInit() {
    this.profileService
    .getUserProfile()
    .get()
    .then( userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.data();
      this.birthDate = userProfileSnapshot.data().birthDate;
      this.contact = userProfileSnapshot.data().contact;
    });
  }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Your full name',
      inputs: [
        {
          type: 'text',
          name: 'fullName',
          placeholder: 'Your full Name',
          value: this.userProfile.fullName,
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updateName(data.fullName);
          },
        },
      ],
    });
    await alert.present();
  }

   updateDOB(birthDate: string): void {
    if (birthDate === undefined) {
      return;
    }
    this.profileService.updateDOB(birthDate);
  }

  async updateContact(contact: string): Promise<any>{
    const alert = await this.alertCtrl.create({
      subHeader: 'Your Contact Number',
      inputs: [
        {
          type: 'text',
          name: 'contact',
          placeholder: 'Your Contact Number',
          value: this.userProfile.contact,
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updateContact(data.contact);
          },
        },
      ],
    });
    await alert.present();

  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
        { name: 'password', placeholder: 'Your password', type: 'password' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          },
        },
      ],
    });
    await alert.present();
  }
  
  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          },
        },
      ],
    });
    await alert.present();
  }


}