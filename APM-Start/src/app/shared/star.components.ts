import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        // console.log('the star '+this.rating+' was clicked');
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5; // bo width = 75px
    }
}