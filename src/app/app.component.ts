import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'greenbrothers-template';
  configApp = {
    sidebar: {
      title: 'hdgjhdgf',
      header: 'hjdjk'
    },
    dashboard: {
      header: {
        title: "jdfhjsfk"

      },
      content: {

      },
      footer: {

      }
    },
    title: 'Здравствуйте!',
    text_1: 'Мы компания Green Brothers. Профессионально занимаемся ландшафтным дизайном с 2015 года.',
    text_2: 'На этом сайте Вы сможете подробно узнать о нашем опыте, а также посмотреть реализованные проекты',
    text_3: 'Краткая автобиография:',
    text_4: 'Lorem ipsum dolor sit.',
    text_5: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    text_6: 'Lorem ipsum dolor sit amet consectetur.',
    text_7: 'Lorem ipsum dolor sit amet consectetur.',
    text_8: 'Lorem ipsum dolor sit amet consectetur.',
    contact_data: 'Контактные данные',
    logoText: 'Green Brothers',
    lorem_1: 'Lorem 1'
  };
  rabbit = {
    leg: 'ноги',
    eyes: 2,
    tail: 1,
    children: [
      {id: 1, name: 'Vase'},
      {id: 2, name: 'Ulya'},
      {id: 3, name: 'Sasha'}
    ]
  };
  fruits = [
    {name: 'apple', count: 3, isRed: true},
    {name: 'banana', count: 2, isRed: false},
    {name: 'tomato', count: 8, isRed: true}
  ];
  animals = [
    {name: 'Roy', type: 'dog'},
    {name: 'Kite', type: 'cat'},
    {name: 'Rodi', type: 'rabbit'}
  ];
  car = {
    koleso: [
      { id: 1,
         name: 'переднее правое',
         ulol: {
           jgkfj: 55
         }
    },
      { id: 1, name: 'переднее левое',
      jojo: ['2', 6] 
    },
      { id: 1, name: 'заднее правое' },
      { id: 1, name: 'заднее левое' }
    ],
    motor: {
      klapan: 4,
      kog: 20,
      oil: {
        addd: 8
      }
    },
    kuzov: 'red'
  }
  ngOnInit(): void {
    console.log(this.configApp);
  }
}
