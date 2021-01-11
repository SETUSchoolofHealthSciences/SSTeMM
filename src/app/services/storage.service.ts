import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const API_STORAGE_KEY = 'sstemm-key';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  
  public getLocalData(key: string) {
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }

  public setLocalData(key: string, data: any) {
    return this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }

  public removeLocalData(key: string) {
    console.log('data removed from storage', key);
    this.storage.remove(`${API_STORAGE_KEY}-${key}`);
  }

}

