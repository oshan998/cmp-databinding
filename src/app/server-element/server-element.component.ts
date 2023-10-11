import { ElementRef,Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

 @Input('srvElement') element: { type: string, name: string, content: string};
 @Input() name:string;
 @ViewChild('heading') header: ElementRef;
 @ContentChild('contentParagraph') contentParagraph: ElementRef;
 
 constructor(){
  console.log('constructor called');
 }

 ngOnChanges(changes: SimpleChanges){
  console.log('ngonchanges called');
  console.log(changes);
 }
 
 ngOnInit(): void {
  console.log('ngonit called');
  // console.log('text content ',this.header.nativeElement.textContent);

  // console.log('text content of paragraph'+this.contentParagraph.nativeElement.textContent);
 }

 ngDoCheck(): void {
   console.log('ngdocheck called')
 }

 ngAfterContentInit(): void {
   console.log('ngafterconteninit called')
  //  console.log('text content of paragraph'+this.contentParagraph.nativeElement.textContent);
 }

 ngAfterContentChecked(): void {
   console.log('ngaftercontent checked called')
 }

 ngAfterViewInit(): void {
  console.log('ngAfterViewInit called')
  console.log('text content ',this.header.nativeElement.textContent);
}

ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked called')
}

ngOnDestroy(): void {
  console.log('ngOnDestroy called')
}

}
