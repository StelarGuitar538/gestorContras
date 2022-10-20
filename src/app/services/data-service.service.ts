import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService{

  constructor(private afs: AngularFirestore) { }



async addDocument(email: string, password: string) {
  const userId = 'test-id';
  const collection = this.afs.collection(`users/${userId}/passwords`);

  const data = {
    email,
    password,
    }

  await collection.add(data)

   /// optional Promise methods
  .then(() => console.log('success') )
   .catch((err: any) => console.log(err) )

}
}








