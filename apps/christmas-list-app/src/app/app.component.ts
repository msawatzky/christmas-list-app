import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListItemService } from './services/list-item.service';
import { ListItem } from './interfaces/list-item.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports: [RouterModule, FormsModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'christmas-list-app';
  listItems: ListItem[] = [];
  newListItem: ListItem = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    store: '',
    isClaimed: false,
    claimedBy: '',
    claimedAt: new Date(),
  };
  constructor(private listItemService: ListItemService) {}

  ngOnInit() {
    this.listItemService.getAll().subscribe((listItems) => {
      this.listItems = listItems;
    });
  }

  addListItem(listItem: ListItem) {
    this.listItemService.create(listItem).subscribe((listItem) => {
      this.listItems.push(listItem);
    });
  }

  deleteListItem(id: string) {
    this.listItemService.delete(id).subscribe(() => {
      this.listItems = this.listItems.filter((listItem) => listItem.id !== id);
    });
  }
  
}
