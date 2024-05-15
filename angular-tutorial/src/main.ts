import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TutorialComponent } from './app/tutorial/tutorial.component';

bootstrapApplication(TutorialComponent, appConfig).catch((err) =>
  console.error(err)
);
