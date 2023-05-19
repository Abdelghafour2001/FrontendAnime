import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[greenHighlight]'
})
export class GreenHighlightDirective implements OnInit {
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
    }
    constructor(private elementRef:ElementRef){}
}