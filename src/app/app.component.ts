import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var ts;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Triangle type';
  triangleForm;
  submitted = false;
  isBusy = true;
  ts: any;
  result: any;
  @ViewChild('submitButton') submitButton: ElementRef;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.triangleForm = new FormGroup({
      side1: new FormControl('', Validators.compose([Validators.pattern('^[0-9.]*$'), Validators.required])),
      side2: new FormControl('', Validators.compose([Validators.pattern('^[0-9.]*$'), Validators.required])),
      side3: new FormControl('', Validators.compose([Validators.pattern('^[0-9.]*$'), Validators.required])),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.triangleForm.valid) {
      this.isBusy = true;
      this.renderer.setAttribute(this.submitButton.nativeElement, 'data-ts.busy', 'true');
      this.result = this.getTriangleType(Number(this.triangleForm.value.side1), Number(this.triangleForm.value.side2), Number(this.triangleForm.value.side3));
      setTimeout(() => {
        this.renderer.setAttribute(this.submitButton.nativeElement, 'data-ts.busy', 'false');
      }, 600);
      if (!this.result) {
        ts.ui.Notification.error('Given lengths are invalid!');
      }
    }

  }

  getTriangleType(a, b, c) {
    if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {  //make sure a triangle can be formed 
      if (a === b && b === c) return "Equilateral";
      if (b === c || a === b || c === a) return "Isosceles";
      return "Scalene";
    }

  }
}
