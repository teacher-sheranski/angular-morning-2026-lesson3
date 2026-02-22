import { Component, input, model, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-special-input',
  imports: [FormsModule],
  template: `
    <!-- <input type="text" [(ngModel)]="data" #myInput name="data" (input)="changeMe()" /> -->
    <!--  #myInput עדיף להשתמש במשתנה מסונכרן מאשר ברפרנס -->
    <!-- <p>input length: {{myInput.value.length}}</p> -->

    <input type="text" [(ngModel)]="value" [name]="inputName()" />
    <p>input length: {{ value().length }}</p>
  `,
  styleUrl: './special-input.scss',
})
export class SpecialInput /*implements OnInit*/ {
  // data: string = '';

  // two way binding
  // סנכרון של משתנה עם ערך מתוך הקומפוננטה
  // Change ע"י משתנה אאוטפוט שנקרא בשם של האינפוט עם סיומת
  // value = input('');
  // valueChange = output<string>();

  // במקום להגדיר 2 משתנים כנ"ל
  // input/output
  // model מגדיר את 2 הכיוונים של שינוי המשתנה
  // כמו אינפוט לא לקריאה בלבד
  value = model<string>('');

  inputName = input.required<string>({ alias: 'name' });

  // ngOnInit(): void {
  //   this.data = this.value();
  // }

  // changeMe() {
  //   this.valueChange.emit(this.data);
  // }
}
