import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'library-test',
  templateUrl: './lib.component.html',
  styles: [],
})
export class LibComponent{
  @Input() data?: string;

  @Output() charactersInString = new EventEmitter<number>();

  ngOnInit() {
    this.charactersInString.emit(this.data!.length);
  }

  sendData() {
    this.charactersInString.emit(this.data!.length);
  }


}
