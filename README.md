# FancyGridCLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Installs

Instal gulp if you don't have it already.
Run 'npm i' to instal project dependencies.

## Start

Raname 'config.template.js' file to 'config.js' and insert your SaleForce crendentials there.
Create or deploy salesforce class. Example is provided in SaleForce/classes folder.
To run local server connected with SaleForce insert your credentials into src/index.html file.

## Development server

Make sure your credentials are set in src/index.html file.
Run 'gulp serve' to start local development server. Navigate to `http://localhost:8085/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run 'gulp build' to build project.

## SalesForce

Create AngularAppControler class in salesforce. Example is in Salesforce/classes.

## Deploy to SalesForce

Run 'gulp deploy' to deploy project to SalesForce.