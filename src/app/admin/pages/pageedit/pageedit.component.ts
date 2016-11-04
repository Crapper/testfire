import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PageService } from '../../shared/page.service';

import { GrowlMessagesService } from '../../shared/growlmessages.service';

@Component({
  selector: 'app-pageedit',
  templateUrl: './pageedit.component.html',
  styleUrls: ['./pageedit.component.css']
})
export class PageeditComponent implements OnInit {

  key: string;
  page: any;
  allImages;
  body;
  message;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private growl: GrowlMessagesService, private pageService: PageService) {
    
  }

  ngOnInit() {
    this.allImages = this.pageService.getImageList();
    this.key = this.activateRoute.snapshot.params['key'];
    this.page = this.pageService.getPage(this.key);
  }

  keyupHandlerFunction(content) {
    this.body = content;
  }

  updatePage(form: NgForm) {
    this.growl.pushMessage('Pagina is ge-updated');
    this.pageService.updatePage(form.value, this.body, this.key)
      .then(_ => this.router.navigate(['/admin/pages']));
  }

  backToList() {
    this.growl.pushMessage('');
    this.router.navigate(['/admin/pages']);
  }


}
