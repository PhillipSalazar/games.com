import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Games = {
    game1 : {
        name : 'RISE UP BALLOON',
        img  : 'https://img.gamedistribution.com/912e740c574741b1af92e99c12cce6d5-512x384.jpeg',
        url  : 'https://html5.gamedistribution.com/912e740c574741b1af92e99c12cce6d5/'
    },

    game2 : {
        name : 'LINE PUZZLE',
        img  : 'https://img.gamedistribution.com/240659d7626641f9a3a3d0b074b7131a-512x384.jpeg',
        url  : 'https://html5.gamedistribution.com/240659d7626641f9a3a3d0b074b7131a/'
    },

    game3 : {
      name : 'TWO DOTS',
      img  : 'https://img.gamedistribution.com/e22acefe19f94570a80c201fcd0ac850-512x384.jpeg',
      url  : 'https://html5.gamedistribution.com/e22acefe19f94570a80c201fcd0ac850/'
    },
    game4 : {
      name : 'FIREBOY AND WATERGIRL 1 FOREST TEMPLE',
      img  : 'https://img.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75-512x384.jpeg',
      url  : 'https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/'
    },

    game5 : {
      name : 'SURF RIDERS',
      img  : 'https://img.gamedistribution.com/272cde91be6e4940a196ca8f80b951e4-512x384.jpeg',
      url  : 'https://html5.gamedistribution.com/272cde91be6e4940a196ca8f80b951e4/'
    },
    game6 : {
      name : 'SQUARY BIRD',
      img : 'https://img.gamedistribution.com/4511bc75be4644398dad50b68bd61956-512x384.jpeg',
      url : 'https://html5.gamedistribution.com/4511bc75be4644398dad50b68bd61956/'
    },

    game7 : {
      name : 'TOWER DEFENSE',
      img : 'https://img.gamedistribution.com/77e1107ca4be4fdfb62b498d014bbfa7-512x384.jpeg',
      url : 'https://html5.gamedistribution.com/77e1107ca4be4fdfb62b498d014bbfa7/'
    },

    game8 : {
      name: 'ROLLING CHEESE',
      img : 'https://img.gamedistribution.com/960990fe672b4f1aa524ba7016d34c64-512x384.jpeg',
      url: 'https://html5.gamedistribution.com/960990fe672b4f1aa524ba7016d34c64/'
    },

    game9 : {
      name : 'CUBE JUMP ONLINE',
      img : 'https://img.gamedistribution.com/073c781df9a346bc9a8cf61ee46c9f0f-512x384.jpeg',
      url : 'https://html5.gamedistribution.com/073c781df9a346bc9a8cf61ee46c9f0f/'
    },

    game10 : {
      name : 'WHACK EM ALL',
      img : 'https://img.gamedistribution.com/7c84118b8df24c44b5c23c76bbc8cadf-512x384.jpeg',
      url : 'https://html5.gamedistribution.com/7c84118b8df24c44b5c23c76bbc8cadf/'
    }


  }

  constructor() { }

  ngOnInit() {
  }

}
