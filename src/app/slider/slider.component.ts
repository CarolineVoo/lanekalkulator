import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Output() valueChange = new EventEmitter<number>();
  @Input() id: string;
  @Input() title: string;
  @Input() max: number;
  @Input() min: number;
  @Input() step: number;
  @Input() suffix: string;

  @Input()
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.valueChange.emit(this._value);
  }

  _value: number;
  

  constructor() { }

  ngOnInit(): void {}

  onChangeValue(value: number): void {
    if(!value) {
      return;
    }
    this.value = value;
  }

}
