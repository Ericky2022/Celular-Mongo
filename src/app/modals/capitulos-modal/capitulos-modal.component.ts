import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Adicionar o CommonModule para *ngIf e *ngFor
import { VersiculosService } from 'src/app/services/versiculos.service';


@Component({
  selector: 'app-capitulos-modal',
  standalone: true, // Modal independente
  imports: [IonicModule, CommonModule], // Adicionar módulos necessários
  templateUrl: './capitulos-modal.component.html',
  styleUrls: ['./capitulos-modal.component.scss'],
})
export class CapitulosModalComponent {
  @Input() livro: any; // Livro recebido do modal
  versiculos: any[] = [];
  capituloSelecionado: number | null = null;

  constructor(
    private modalController: ModalController,
    private versiculosService: VersiculosService
  ) {}

  fecharModal() {
    this.modalController.dismiss();
  }

  carregarVersiculos(capitulo: number) {
    this.capituloSelecionado = capitulo;
    this.versiculosService
      .getVersiculosPorLivroCapitulo(this.livro.book_name, capitulo) // Certifique-se de que este método exista
      .subscribe(
        (response: any[]) => {
          this.versiculos = response;
        },
        (error: any) => {
          console.error('Erro ao buscar versículos:', error);
        }
      );
  }
}
