import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  titulo = "Principal";

  public dashboard = [
    {nome: "inicio"},
    {nome: "meio"},
    {nome: "quase-fim"},
    {nome: "fim"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
