import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Politician } from '../politician.model';

@Component({
  selector: 'neocratia-create-politician',
  templateUrl: './create-politician.component.html',
  styleUrls: ['./create-politician.component.scss']
})
export class CreatePoliticianComponent implements OnInit {
  @Output() createPolitician = new EventEmitter();
  politicianForm: FormGroup;
  newPolitician: Politician;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.politicianForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      resume: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      yearsInCongress: new FormControl(0, Validators.required)
    });

    this.politicianForm.valueChanges.subscribe(
      form =>
        (this.newPolitician = {
          id: new Date().getTime().toString(),
          info: { name: form.name, email: form.email },
          resume: form.resume,
          city: form.city,
          yearsInCongress: form.yearsInCongress,
          userId: 'visitor'
        })
    );
  }
}
