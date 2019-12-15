import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    public toastController: ToastController
  ) { }

  /**
   * Utility method that fetches the data from LocalStorage.
   * @param keyName StringValue which will be used to fetch the data.
   */
  getLocalStorage(keyName: string): any {
    return JSON.parse(localStorage.getItem(keyName) || null);
  }

  /**
   * Utility method that stores the data to localStorage.
   * @param keyName StringValue which will be used to fetch the data.
   * @param value Provide the value to save.
   */
  setLocalStorage(keyName: string, value: any): void {
    localStorage.setItem(keyName, JSON.stringify(value));
  }

  /**
   * Method to display the autoHiding loader based on requirement.
   * @optional @param message Pass the message to display.
   * @optional @param duration string to override 2s timeout.
   */
  showAutoHideLoader(message: string = '', duration: number = 2000) {
    this.loadingController.create({
      message,
      duration
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
  }

  /**
   * Method to display confirmation modal.
   * @optional @param title string value display as Title.
   * @optional @param message string value display as Message.
   * @optional @param successText Success button text value.
   * @optional @param cancelText Cancel button text valuel.
   */
  presentConfirmModal(
    title?: string,
    message?: string,
    successText: string = 'Yes',
    cancelText: string = 'No',
  ): Observable<boolean> {
    return Observable.create((observer) => {
        this.alertCtrl.create({
          header: title || '',
          message: message || '',
          buttons: [
            {
              text: cancelText,
              role: 'destructive',
              handler: () => observer.next(false)
            }, {
              text: successText,
              role: 'destructive',
              handler: () => observer.next(true)
            }
          ]
        }).then((alert) => alert.present());
    });
  }

  /**
   * Method to display Toast on the screen.
   * @optional @param title string value display as message.
   * @optional @param duration timeout value hide the toaster. Default is 2s.
   * @optional @param position string value to decide where to popup the toast.
   */
  presentToast(message: string = "", position: any = "top", duration: number = 2000) {
    this.toastController.create({
      message,
      duration,
      position
    }).then(toast=> {
      toast.present()
    });
  }
}
