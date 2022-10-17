import {ElementRef,Renderer2,Directive} from '@angular/core';

@Directive({
    selector:'[highlight]'
})
export class Highlight{

    constructor(ref:ElementRef,renderer:Renderer2){
        renderer.setStyle(ref.nativeElement,'color','green')

    }
}