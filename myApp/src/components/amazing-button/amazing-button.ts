import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'amazing-button',
  templateUrl: 'amazing-button.html'
})
export class AmazingButtonComponent {

    @Input() buttonName: string = 'BUTTON';
    @Input() buttonColor: string = '';
    // これはアンチパターンらしい…。
    @Input() callbackFunc: any;
    @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
    isDisabled: boolean = false;

    constructor() {
        console.log('Hello AmazingButtonComponent Component');
    }

    async thisButtonClicked() {

        console.log(`Start isDisabled ... ${this.isDisabled}`);

        // 初回はfalseなのでスルー
        if (this.isDisabled) {
            console.log('処理待機中だよ！');
            return;
        }

        // isDisabledを切り替え。下の処理が終わるまではtrueなのでこの処理に到達しない。
        this.toggleState();
        await this.buttonClicked.emit();

        // 処理が成功したらここで再度切り替わる。
        this.toggleState();
        console.log(`Finish isDisabled ... ${this.isDisabled}`);

    }

    // ボタンの状態を切り替える。
    private toggleState() {
        this.isDisabled = !this.isDisabled;
    }

}
