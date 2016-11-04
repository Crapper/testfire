import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageService } from '../../shared/page.service';

@Component({
  selector: 'app-pagenew',
  templateUrl: './pagenew.component.html',
  styleUrls: ['./pagenew.component.css']
})
export class PagenewComponent implements OnInit {

  allImages;
  body;

  constructor(private router: Router, private pageService: PageService) {

  }
  ngOnInit() {
    this.allImages = this.pageService.getImageList();
  }

  keyupHandlerFunction(content) {
    this.body = content;
  }

  saveItem(newTitle: string, isHome: boolean) {
    this.pageService.savePage(newTitle, this.body, isHome);
  }

  backToList() {
    this.router.navigate(['/admin/pages']);
  }

}
