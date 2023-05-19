import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {    
@Input() defaultColor:string='white';
@Input() highlightColor:string='orange';
@HostBinding('style.backgroundColor') backgroundColor:string | undefined;

    constructor(private elementRef:ElementRef,private renderer: Renderer2){}

    ngOnInit(){
        this.backgroundColor=this.defaultColor;
//this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');    
}
@HostListener('mouseenter') mouseover(eventData: Event){    
    this.backgroundColor=this.highlightColor;
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');  

}
@HostListener('mouseleave') mouseleave(eventData: Event){
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','orange');  
   this.backgroundColor=this.defaultColor;
}
}


