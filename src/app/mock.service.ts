import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MockService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getMockInfo(): Promise<any> {
    return this.http.get('https://gist.githubusercontent.com/jakobt/8b44844ae0101949d7117a37f2d44161/raw/452dc8193f3279b36c7aa78f0c6d15b8114e3800/flatlist.json').toPromise();
  }
}
