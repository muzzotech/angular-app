import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { of } from 'rxjs/observable/of';
import { Music } from '../../../shared/models/music';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {

  private musicRoute = 'http://localhost:3000/music';
  public music: Music[];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getMusic() {
    this.http.get<Music[]>(this.musicRoute).subscribe(music => {
      this.music = music;
      console.log('Music', this.music);
    });
  }

  getEmbedUrl(song) {
    return this.sanitizer.bypassSecurityTrustResourceUrl( song.url);
  }


  ngOnInit() {
    this.getMusic();
  }

}
