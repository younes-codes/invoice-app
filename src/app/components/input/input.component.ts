import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Input() label: string;
    @Input() name: string;
    @Input() type: string;
    @Input() isReadOnly: boolean;
    constructor() {
    }

    ngOnInit(): void {
    }


}
