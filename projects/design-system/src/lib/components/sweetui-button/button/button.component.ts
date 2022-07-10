import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sweetui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  /**
   * 	The element's unique identifier. See MDN
   */
  @Input() id: string | null = null;

  /**
   * Is this the principal call to action on the page?
   */
  @Input() color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error' = 'default';

  /**
   * Base color to Button
   */

  /**
   * How large should the button be?
   */
  @Input() size: 'small' | 'medium' | 'large' | 'default' | 'auto' = 'default';

  /**
   * Button should be disabled?
   */
  @Input() isDisabled: boolean = false;

  /**
   * Button contents
   *
   * @required
   */
  @Input() label = 'Button';

  /**
   * What button type to use
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>();

  handleClick($event: MouseEvent) {
    this.onClick.emit($event);
  }

  public get className(): string[] {
    const mode = `type--${this.color}`;

    return [
      'button sweetui-button-size sweetui-button-color',
      `sweetui-button--${this.size}`,
      mode,
    ];
  }
}
