import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class PageService {

  pages: FirebaseListObservable<any>;
  page: FirebaseObjectObservable<any>;
  private allImages = [];
  private images: FirebaseListObservable<any>;
  constructor(private af: AngularFire) {

    this.images = this.af.database.list('/images', { preserveSnapshot: true });
    this.images.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.allImages.push({ title: snapshot.val().name, value: snapshot.val().link })
      });
    })

  }

  getPageList() {
    this.pages = this.af.database.list('pages');
    return this.pages;
  }
  getPage(key: string) {
    this.page = this.af.database.object('/pages/' + key);

    return this.page;
  }

  savePage(newTitle: string, body: any, isHome: boolean) {
    this.pages.push({ title: newTitle, body: body, ishome: isHome });
  }
  updatePage(form, body, key: string) {

    this.page = this.af.database.object('/pages/' + key);
    if (body) {
      this.page.update({ body: body });
    }
    return this.page.update(form);
  }

  getImageList() {
    return this.allImages;
  }

}
