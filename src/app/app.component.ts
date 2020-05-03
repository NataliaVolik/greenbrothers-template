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
      logo: {
        title: 'Green Brothers',
      },
      navbar: {
        vacancies: 'Вакансии',
        services: 'Сервис',
        works: 'Работы'
      },
      reserved: {
        right: 'Все права защищены',
        year: 2019
      },
    },
    dashboard: {
      header: {
      title: "О компании"
      },
      content: {
        title: 'Здравствуйте!',
        text_1: 'Мы компания Green Brothers. Профессионально занимаемся ландшафтным дизайном с 2015 года.',
        text_2: 'На этом сайте Вы сможете подробно узнать о нашем опыте, а также посмотреть реализованные проекты',
        text_3: 'Краткая автобиография:',
        text_4: 'Lorem ipsum dolor sit.',
        text_5: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        text_6: 'Lorem ipsum dolor sit amet consectetur.',
        text_7: 'Lorem ipsum dolor sit amet consectetur.',
        text_8: 'Lorem ipsum dolor sit amet consectetur.',
        contact: 'Контактные данные'
      },
      footer: {
        name: 'Posted by: Hege Refsnes',
        info: 'Contact information:',
        contact: 'greenbrothers@gmail.com'
      }
    },
  };
  rabbit = {
    leg: 'ноги',
    eyes: 2,
    tail: 1,
    children: [
      {id: 1, name: 'Rabbit 1'},
      {id: 2, name: 'Rabbit 2'},
      {id: 3, name: 'Rabbit 3'}
    ]
  };
  ngOnInit(): void {
    console.log(this.configApp);
  }
  changeVal(resalt){
    console.log(resalt);
  }
  eventHeader(mystring: string){
    alert(mystring);
  }
}
