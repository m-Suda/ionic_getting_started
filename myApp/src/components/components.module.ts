import { NgModule } from '@angular/core';
import { AmazingButtonComponent } from './amazing-button/amazing-button';
import { EmailFormComponent } from './email-form/email-form';
@NgModule({
	declarations: [AmazingButtonComponent,
    EmailFormComponent],
	imports: [],
	exports: [AmazingButtonComponent,
    EmailFormComponent]
})
export class ComponentsModule {}
