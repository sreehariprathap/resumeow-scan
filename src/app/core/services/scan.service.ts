import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  constructor(http:HttpClient) { }

  // Define methods for scanning functionality here
  getScanResults(scanId: string) {
    
  }
}
