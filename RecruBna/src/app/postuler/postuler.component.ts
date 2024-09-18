import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateBeforeValidator } from '../postuler/date-of-birth.validator';
import { emailCustomValidator } from '../postuler/email.validator';
import { matchEmailValidator } from './match-email.validator';
import { ObetentionDiplome } from '../postuler/ObetentionDiplome.validator'
import { moyenne } from '../postuler/moyenne.validator'; 

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  form!: FormGroup;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      nom: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],  // Validates letters and spaces only
      prenom: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      dateDeNaissance: ['', [Validators.required, dateBeforeValidator()]],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email, emailCustomValidator()]],
      confirmationEmail: ['', [Validators.required, Validators.email]],
      diplome: ['', Validators.required],
      dateObtentionDiplome: ['', [Validators.required, this.dateValidator]],
      moyenneGeneraleBac: ['', [Validators.required, this.moyenneGeneraleValidator]],
      moyenneGeneraleDiplome: ['', [Validators.required, this.moyenneGeneraleValidator]],
       ancienneteProfessionelle:['', Validators.required],
    },
  {
    validators: matchEmailValidator('email')
  });
  }


  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const inputDate = new Date(control.value);
    const today = new Date();
  
    // Ensure the input date is not in the future
    if (inputDate > today) {
      return { futureDate: true };
    }
    return null;
  }
  



     // Inline validator function to check if the input is a float and <= 20
     moyenneGeneraleValidator(control: AbstractControl): { [key: string]: any } | null {
      const value = parseFloat(control.value);
      if (isNaN(value)) {
        return { invalidNumber: true };  // Not a valid number
      }
      if (value < 0) {
        return { negativeNumber: true };  // Negative number check
      }
      if (value > 20.9) {
        return { maxMoyenne: true };  // Check if the value is <= 20
      }
      return null;  // No error
    }




  get emailControl(): AbstractControl {
    return this.form.get('email')!;
  }

  get confirmationEmailControl(): AbstractControl | null {
    return this.form.get('confirmationEmail');
  }

  get cinControl(): AbstractControl | null {
    return this.form.get('cin');
  }
  
  get nomControl(): AbstractControl | null {
    return this.form.get('nom');
  }
  

  get prenomControl(): AbstractControl | null {
    return this.form.get('prenom')!;
  }

  get dateDeNaissanceControl() {
    return this.form.get('dateDeNaissance');
  }

  get telephoneControl(): AbstractControl {
    return this.form.get('telephone')!;
  }
  


  get diplomeControl(): AbstractControl {
    return this.form.get('diplome')!;
  }

  get dateObtentionDiplomeControl(): AbstractControl | null {
    return this.form.get('dateObtentionDiplome');
  }

  get moyenneGeneraleBacControl() {
    return this.form.get('moyenneGeneraleBac');
  }
  
  
  get moyenneGeneraleDiplomeControl(): AbstractControl | null {
    return this.form.get('moyenneGeneraleDiplome');
  }
  
  get mgAnneeDiplomeMoins1Control(): AbstractControl | null {
    return this.form.get('mgAnneeDiplomeMoins1');
  }
  
  get mgAnneeDiplomeMoins2Control(): AbstractControl | null {
    return this.form.get('mgAnneeDiplomeMoins2');
  }
  
  get ancienneteProfessionelleControl():AbstractControl {
    return this.form.get('ancienneteProfessionelle')!;
  }
  
  onCancel(): void {
    this.form.reset();
  }

  onSubmit() {
    if (this.form.valid) {
      // Handle form submission logic
      console.log("Form Submitted:", this.form.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
