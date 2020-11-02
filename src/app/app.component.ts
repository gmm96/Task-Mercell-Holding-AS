import {Component, OnInit} from '@angular/core';
import {MockService} from './mock.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  info: any;
  orderedInfo: Array<any>;
  productForm: FormGroup;

  constructor(
    private mockService: MockService,
    private fb: FormBuilder
  ) {
  }

  async ngOnInit() {
    this.info = (await this.mockService.getMockInfo() );
    await this.getOrderedArray();

    this.productForm = this.fb.group({
      code: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{8}')])],
      name: [null, Validators.required],
    });

  }

  async getOrderedArray() {
    this.orderedInfo = this.info.sort( ( a, b ) => {
      return a.code - b.code;
    });
  }

  isInteger(num: number, level: number) {
    return Number.isInteger(num / Math.pow(10, (level - 1) * 2));
  }

  async onSubmit(value: any) {
    if (this.orderedInfo.some(e => e.code === value.code)) {
      alert('This code already exists!');
      return;
    } else if (this.orderedInfo.some(e => e.name === value.name)) {
      alert('This name already exists!');
      return;
    }

    this.info.push(value);
    await this.getOrderedArray();
  }
}
