import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/components/modal/modal.service';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  public openModal(id: string): void {
    this.modalService.open(id);
  }

  public closeModal(id: string): void {
    this.modalService.close(id);
  }

}
