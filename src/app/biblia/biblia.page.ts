import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { VersiculosService } from '../services/versiculos.service';
import { CommonModule } from '@angular/common';
import { CapitulosModalComponent } from '../modals/capitulos-modal/capitulos-modal.component'; // Importar o componente do modal

@Component({
  selector: 'app-biblia',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './biblia.page.html',
  styleUrls: ['./biblia.page.scss'],
})
export class BibliaPage implements OnInit {
  livrosAgrupados: any[] = []; // Livros agrupados
  livroSelecionado: string | null = null;

  constructor(
    private versiculosService: VersiculosService,
    private modalController: ModalController // Para abrir modais
  ) {}

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros() {
    this.versiculosService.getVersiculos().subscribe(
      (response) => {
        // Agrupando os livros
        this.livrosAgrupados = response.reduce((acc: any[], versiculo: any) => {
          const livroExistente = acc.find(
            (livro) => livro.book_name === versiculo.book_name
          );
          if (livroExistente) {
            if (!livroExistente.capitulos.includes(versiculo.chapter)) {
              livroExistente.capitulos.push(versiculo.chapter);
            }
          } else {
            acc.push({
              book_name: versiculo.book_name,
              capitulos: [versiculo.chapter],
            });
          }
          return acc;
        }, []);
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    );
  }

  async abrirModalCapitulos(livro: any) {
    const modal = await this.modalController.create({
      component: CapitulosModalComponent, // Componente do modal
      componentProps: { livro }, // Passa o livro como dado para o modal
    });
    await modal.present();
  }
}
