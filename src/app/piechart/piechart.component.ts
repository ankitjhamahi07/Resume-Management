import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  data:any;
  data2:any;
  constructor(private route : Router) {

    this.data = {
      labels: ['Angular','.net','React'],
      datasets: [
          {
              data: [10, 50, 120],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };

      this.data2 = {
        labels: ['Frontend','Backend','Data'],
        datasets: [
            {
                data: [20, 40, 80],
                backgroundColor: [
                    "#E9967A",
                    "#36A2EB",
                    "#2323C4"
                    
                ],
                hoverBackgroundColor: [
                    "#006400",
                    "#696969",
                    "#23AFC4"
                    
                ]
            }]    
        };
}



   

  ngOnInit() {
  }

}
