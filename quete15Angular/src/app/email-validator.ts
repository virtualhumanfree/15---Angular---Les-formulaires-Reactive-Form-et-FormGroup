import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'l\'adresse email doit être valide'
        }
    };

    return !valid ? errors : null;
}

// Utilisé se pattern si c'est un RexExp ^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$
//  Sinon utilisé celui-ci /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
