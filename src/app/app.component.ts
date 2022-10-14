import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat-o Tree',
      imgUrl: 'assets/tree.jpeg',
      username: 'Gnomeo',
      content: 'What a gorgeous tree. Wouldnt give me the marbles'
    },
    {
      title: 'Bumpy Mountain',
      imgUrl: 'assets/mountain.jpeg',
      username: 'Hairsuit Jenkins',
      content: 'Wahay; Took me 5 hours te trudge um they numbly bumps. Farce!'
    },
    {
      title: 'Tired',
      imgUrl: 'assets/biking.jpeg',
      username: 'Calfarina',
      content: 'So fest, give emotional damage'
    },
    {
      title: 'Baubles',
      imgUrl: 'https://cdn.xxl.thumbs.canstockphoto.com/christmas-tree-bauble-decoration-isolated-on-white-drawn-in-toddler-art-style-clip-art_csp0611442.jpg',
      username: 'Captain Feet',
      content: 'Ye went searchin for the lengendary Heel Bobbles, and ye found me love instead <3'
    },
    {
      title: 'Weezil',
      imgUrl: 'https://photos1.blogger.com/blogger/6385/705/1600/weasel_ssm.jpg',
      username: 'Weezil',
      content: 'Weezil weezil, ebeneezil, bring me bug meat for my easel!'
    }
  ];
}
