import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCheckboxModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule, MatSliderModule,MatSlideToggleModule,MatSidenavModule,MatExpansionModule  ],
  exports: [MatButtonModule, MatToolbarModule, MatCheckboxModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule, MatSliderModule,MatSlideToggleModule,MatSidenavModule,MatExpansionModule  ],
})
export class MaterialModule { }