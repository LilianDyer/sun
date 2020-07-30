# Courses Code Kata

In this exercise we are going to practice creating a presentational component that will display a list of courses with the ability to add, edit, and delete courses to the list. 

Setup - You can either go through these steps or just download this repo and then run npm install

step 1: run npx create-nx-workspace@latest (more info here: https://nx.dev/angular/tutorial/01-create-application)

step 2: answer questions: Workspace name any-name
        What to create in the new workspace: angular
        Application name: courses
        Default stylesheet format: scss
        Use the free tier...: No
        This will create a sandbox with nx. It takes a few minutes to get it all ready. It will install jest and cypress for testing

step 3: cd to your workspace

step 4: nx serve courses   (to run the sample page, it will open in localhost:4200)
       
step 5: create a new component - nx generate @nrwl/angular:component components/courses 

step 6: nx test 

step 7: material.angular.io and explore components, notice the arrow top right corner, it goes to stackblitz

step 8: ng add @angular/material if you don't already have it

step 9: create a module material.module.ts and copy paste the contents from stackblitz

step 10: install extension: angular material 2, flex layout 1, covalent 1 & Material icon snippets (if you wish to use some shortcuts)



This project was generated using [Nx](https://nx.dev).

[Nx Documentation](https://nx.dev/angular)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)
