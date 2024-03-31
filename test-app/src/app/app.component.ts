import { AfterViewInit, Component, OnInit } from '@angular/core';
import { signOut, fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit, AfterViewInit {
  emailUser = '' // se asigna;
  emailUserf =  '';
  //title = 'Angular Unit Testing';

  ngAfterViewInit(): void {
    this.emailUserf=this.emailUser;
  }

  ngOnInit(){
    //this.emailUser = '' se elimina
    this.printAccessTokenAndIdToken();
  }

  printAccessTokenAndIdToken = async () => {
    try {
      const session = await fetchAuthSession(); // Fetch the authentication session
      const userAttributes = await fetchUserAttributes();
      // this.emailUser=userAttributes.email;
      // console.log('Email:', userAttributes);
      // console.log('Access Token', session.tokens.accessToken.toString());
      // console.log('ID Token', session.tokens.idToken.toString());
    } catch (e) { console.log(e); }
  }

  public sala =  async() => { // se cambia por funcion flecha
    try {
      await signOut();
    } catch (error) {
      // console.log('error signing out: ', error);
    }
  }
}


