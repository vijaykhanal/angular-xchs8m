import { Component } from "@angular/core";

import { auctionItemList } from "../auctionItemList";

@Component({
  selector: "app-auction-list",
  templateUrl: "./auction.component.html",
  styleUrls: ["./auction.component.css"]
})
export class AuctionComponent {
  auctionItemList = auctionItemList;

  share() {
    window.alert("The product has been shared!");
  }
}
