import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { TutorialComponent } from './app/tutorial/tutorial.component';

const bootstrap = () => bootstrapApplication(TutorialComponent, config);

export default bootstrap;
