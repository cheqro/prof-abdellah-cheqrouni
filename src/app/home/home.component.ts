import { Component } from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {HttpClient} from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  imports: [
    PdfViewerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  pdfSrc = 'assets/pdfs/dummy.pdf';

  imageUrl="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"


  constructor(private http: HttpClient) {}

  downloadPDF() {
    this.http.get('assets/pdfs/dummy.pdf', { responseType: 'blob' }).subscribe((data: Blob) => {
      const file = new Blob([data], { type: 'application/pdf' });
      saveAs(file, 'downloaded-file.pdf');
    });
  }
}

