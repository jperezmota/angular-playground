import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail{

  showParagraphIsEnable: boolean = true;
  counterList: number[] = [0];


  changeParagraphVisibility(){
    this.showParagraphIsEnable = !this.showParagraphIsEnable;
  }

  incrementShowDetailCounter() : void{
    let lastValueOfTheCounter: number = this.counterList[this.counterList.length - 1];
    this.counterList.push(lastValueOfTheCounter + 1);
    console.log(this.counterList);
  }

  onDisplayDetailClick(){
    this.changeParagraphVisibility();
    this.incrementShowDetailCounter();
  }

}
