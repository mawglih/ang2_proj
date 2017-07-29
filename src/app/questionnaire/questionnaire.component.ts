import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Questionnaire, Elements } from '../shared/ques';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questForm: FormGroup;
  questionnaire: Questionnaire;
  elements = Elements;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.questForm = this.fb.group({
      name: '',
      company: '',
      email: '',
      telephone: '',
      websiteCurName: '',
      websitePurpose: '',
      elements: '',
      message: '',
    });
  }
  onSubmit(){
    this.questionnaire = this.questForm.value;
    console.log(this.questionnaire);
    this.questForm.reset();
  }

}
