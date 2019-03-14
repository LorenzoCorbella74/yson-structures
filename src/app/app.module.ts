// MODULES
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgJsonEditorModule } from "ang-jsoneditor";

// ROUTER
import { AppRoutingModule } from "./routing.module";

// COMPONENTS
import { AppComponent } from "./app.component";
import { SpinnerComponent } from "./app/components/spinner/spinner.component";
import { AddDialogueComponent } from "./app/components/add-dialogue/add-dialogue.component";
import { ProjectsComponent } from "./app/components/projects/projects.component";
import { StructuresComponent } from "./app/components/structures/structures.component";
import { LoginComponent } from './app/components/login/login.component';
import { StreamDialogueComponent } from './app/components/stream-dialogue/stream-dialogue.component';

// SERVICES
import { LocalStorageService } from './app/services/locastorage.service';
import { AuthenticateService } from './app/services/authenticate.service';
import { CanActivateRouteGuard } from './app/services/can-activate-route.guard';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './app/services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

export function createStorage() {
  return new LocalStorageService('str', 'sessionStorage');
}

@NgModule({
  declarations: [
    SpinnerComponent,
    AppComponent,
    ProjectsComponent,
    AddDialogueComponent,
    StreamDialogueComponent,
    StructuresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      firebaseConfig: {
        apiKey: 'AIzaSyCQGgZpEhJgNTb0cvk7z6lf7lBCjZKMzl8',
        authDomain: 'json-structures.firebaseapp.com',
        databaseURL: 'https://json-structures.firebaseio.com',
        projectId: 'json-structures',
        storageBucket: '',
        messagingSenderId: '1078689315964'
      }
    }),
    AngularFireDatabaseModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgJsonEditorModule
  ],
  entryComponents: [AddDialogueComponent, StreamDialogueComponent],
  exports: [],
  providers: [
    FirebaseService,
    AngularFirestore,
    { provide: LocalStorageService, useFactory: createStorage },
    AuthenticateService,
    AngularFireAuth,
    CanActivateRouteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
