import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { AddNewNewsService } from 'src/app/services/add-new-news.service';
import { ResponseOneMiniNews } from 'src/app/shared/interfaces/interfaces';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-form-add-new-news',
  templateUrl: './form-add-new-news.component.html',
  styleUrls: ['./form-add-new-news.component.scss']
})
export class FormAddNewNewsComponent implements OnInit {

	public selectedFile: any = null;
	public form: FormGroup = new FormGroup({
		title: new FormControl(null, [Validators.required]),
		description: new FormControl(null, [Validators.required]),
		imageFile: new FormControl(null, [Validators.required])
	});
	public isImageFile: boolean = false;

  constructor(
		private modalService: ModalService,
		private addNewNewsService: AddNewNewsService
	) { }

  ngOnInit(): void {
  }

	public onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
		this.isImageFile = this.isImage(this.selectedFile.name);
	}

	private getExt(name: any): string {
		return name.match(/\.([^.]+)$|$/)[1];
	}

	private isImage(fileName: string): boolean {
		const ext = this.getExt(fileName);
		return ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'webp';
	}

	public onSubmit(): void {

		this.file2Base64(this.selectedFile)
		.subscribe(imageBase64 => {

			const categoryType = 'Автомобильные новости';
			const title = this.form.controls['title'].value
			const url = `${categoryType}/${title}`;

			const news: ResponseOneMiniNews = {
				title: title,
				description: this.form.controls['description'].value,
				categoryType: categoryType,
				fullUrl: url,
				titleImageUrl: imageBase64,
				id: Math.floor(Math.random() * 1000000000),
				url: url,
				publishedDate: new Date()
			};

			this.addNewNewsService.addNewNews(news);

			this.selectedFile = null;
			this.isImageFile = false;
			this.closeModal('modal-1');
			this.form.reset();


		});
	}

  public closeModal(id: string): void {
    this.modalService.close(id);
  }

	private file2Base64(file: File): Observable<string> {
		const promise = new Promise<string> ((resolve,reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result?.toString() || '');
			reader.onerror = error => reject(error);
		});
		return from(promise);
	}

}
