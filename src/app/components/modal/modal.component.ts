import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() public id: string | null = null;
  public element: HTMLElement | null = null;
  public subsClickModal!: Subscription;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (this.id === null) {
      console.error('Модальному окну нужен id');
      return;
    }

    if (this.element === null) {
      console.error('Модальное окно не найдено');
      return;
    }

    document.body.appendChild(this.element);

    this.subsClickModal = fromEvent(this.element, 'click')
    .subscribe(event => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('modal__background')) {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    if (this.id === null || this.element === null) {
      return;
    }
    this.modalService.remove(this.id);
    this.element.remove();
    this.element = null;
  }

  open(): void {
    document.body.classList.add('overflowYHidden');
    this.element?.classList.add('modal_open');
  }

  close(): void {
    document.body.classList.remove('overflowYHidden');
    this.element?.classList.remove('modal_open');
  }

}
