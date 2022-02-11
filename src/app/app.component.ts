import { Component } from '@angular/core';
import {DdtChangeEventArgs} from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: { [key: string]: Object }[] = [
    { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
    { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
    { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
    { nodeId: '03-04', nodeText: 'Social Network.pdf' },
    { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
  ];
  //binding data source through fields property
  public fields: any = { dataSource: this.data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };
  valueChanged(event: DdtChangeEventArgs): void {
    console.log(event);
  }
}
