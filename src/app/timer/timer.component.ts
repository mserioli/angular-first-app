import { Component } from '@angular/core';
@Component({
    selector: 'timer',
    templateUrl: 'timer.component.html'
})
export class TimerComponent {
    minutes: number;
    seconds: number;
    constructor() {
        this.reset();
        setInterval(() => this.tick(), 1000);
    }
    reset() {
        this.minutes = 24;
        this.seconds = 59;
    }
    private tick() {
        if (--this.seconds < 0) {
            this.seconds = 59;
            if (--this.minutes < 0) {
                this.reset();
            }
        }
    }
}