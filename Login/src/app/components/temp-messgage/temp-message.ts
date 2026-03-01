import { Component, input } from '@angular/core';

export enum MessageStyle {
  MESSAGE ="font-semibold rounded-full text-center border-2 p-3 w-full",
  ERROR = MESSAGE + " border-error text-error bg-error-bg shadow-error-sh",
};

@Component({
  selector: 'app-temp-message',
  imports: [],
  templateUrl: './temp-message.html',
})

export class TempMessage {

  style = input<MessageStyle>(MessageStyle.ERROR);

}
