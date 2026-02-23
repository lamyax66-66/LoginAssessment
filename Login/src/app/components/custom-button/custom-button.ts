import { Component, input, output } from '@angular/core';
import { ButtonStyle, ButtonType } from '../../enums/button.enum';


@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
})
export class CustomButton {

  buttonType = input<ButtonType>(ButtonType.BUTTON);
  style = input<ButtonStyle>(ButtonStyle.PRIMARY);
  isDisabled = input<boolean>(false);

  triggerCallBack = output<void>();

  readonly ButtonType = ButtonType;

  onClick(): void {
    if(this.isDisabled())
      return;
    this.triggerCallBack.emit();
  }

}
