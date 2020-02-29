import { DecisionsService } from './../decisions.service';
import { Decision } from './../decision.model';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'neocratia-create-decision',
  templateUrl: './create-decision.component.html',
  styleUrls: ['./create-decision.component.scss']
})
export class CreateDecisionComponent implements OnInit {
  decisionForm: FormGroup;
  newDecision: Decision;
  constructor(
    private formBuilder: FormBuilder,
    private decisionsService: DecisionsService
  ) {}

  ngOnInit(): void {
    this.decisionForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });

    this.decisionForm.valueChanges.subscribe(
      form =>
        (this.newDecision = {
          id: new Date().getTime().toString(),
          title: form.title,
          description: form.description,
          date_created: form.date,
          numberOfVotes: 0
        })
    );
  }

  createDecision() {
    this.decisionsService.createDecision(this.newDecision);
  }
}
