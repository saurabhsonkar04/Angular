import { Component, OnInit } from '@angular/core';
import { LambdaService } from '../../shared/lambda.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {
  awsResponse;
  constructor(private aws:LambdaService) { }

  ngOnInit() {
    this.aws.awsLmbda()
    .subscribe(
      resp => this.awsResponse=resp
    )
    
  }
}
