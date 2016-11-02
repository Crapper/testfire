import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() elementId: String;
  @Input() imagelist;
  @Input() htmlEditor;
  @Output() valueChange = new EventEmitter();
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table', 'image', 'code'],
      image_list: this.imagelist,
      skin_url: '../../../assets/skins/lightgray',
      height : 400,
      language: 'nl',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
        editor.on('change', (e, l) => {
		      this.valueChange.next(editor.getContent());
		  });
      },
    });

    
  }
ngOnChanges(changes){
        if (tinymce.activeEditor)
            tinymce.activeEditor.setContent(this.htmlEditor);
    }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}