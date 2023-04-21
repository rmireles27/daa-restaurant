import { Injectable } from '@angular/core';
import { Menu } from 'src/app/_models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuList: Menu[] = [
    {
      title: 'Rigatoni ala carbonara',
      image: '../../assets/menu/rigatoni-ala-carbonara.jpg',
      description:
      'Pocos ingredientes se usan para preparar este platillo, pero el secreto esta en su calidad, y la manera en que se pegan a la pasta cilindrica. Queso pecorino, cachete de puerco y huevos crudos organicos es todo lo que se necesita para preparar la especialidad de Roma.',
    },
    {
      title: 'Gelato',
      image: '../../assets/menu/gelato.jpg',
      description: 
      'Se dice que fue inspirado por antiguos Silicianos que mezclaban jugo de fruta con nieve del Monte Etna. Hoy, las recetas tambien usan leche, crema, azucar y huevos.',
    },
    {
      title: 'Lasagne',
      image: '../../assets/menu/lasagne.jpg',
      description: 
      'Hecho con capas de ragu, salsa de bechamel y queso parmegiano saliendo de laminas de pasta hechas a mano.',
    },
    {
      title: 'Risotto ala milanese',
      image: '../../assets/menu/risotto-alla-milanese.jpg',
      description: 
      'Un platillo iconico con un sabor exotico. Este platillo de arroz cremoso obtiene su color dorado y su textura suave del azafran. Por eso tambien se le llama risotto allo zafferano, aunque los Milanos lo llaman por un nombre mas sencillo, risott giad (arroz amarillo).',
    },
    {
      title: 'Sfogliatella',
      image: '../../assets/menu/sfogliatella.jpg',
      description: 
      'Aquellos amantes de lo dulce adoraran esta pieza de pasteleria Napolitana, hay dos tipos de sfogliatella. La ricca, significando "ondulada", tiene la forma de un cascaron y tiene capas crujientes de ojaldre relleno con dulce queso ricotta, trozos de naranja endulzada, vainilla y canela, espolvoreado con azucar.',
    }
  ];
  constructor() { }

  getMenuList(): Menu[] {
    return this.menuList;
  }
}
