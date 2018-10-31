import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Triangle type'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Triangle type');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Determine triangle type');
  }));
  it('form invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.triangleForm.valid).toBeFalsy();
  });
  it('form should validate required fields', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    let errors = {};
    let side1 = component.triangleForm.controls['side1'];
    errors = side1.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('form should be valid if all fields are correctly set', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    let side1 = component.triangleForm.controls['side1'];
    side1.setValue("10");
    let side2 = component.triangleForm.controls['side2'];
    side2.setValue("5");
    let side3 = component.triangleForm.controls['side3'];
    side3.setValue("7");
    expect(component.triangleForm.valid).toBeTruthy();
  });
});
