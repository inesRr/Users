# Users

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

Users
Display users in a table with sorting and editing functionality

Objective: Create a responsive web page using Angular that fetches and displays data from a REST API. Ensure the page is mobile-friendly and includes functionality for sorting and presenting the data, as well as editing user details through a modal. Requirements: ● Use Angular (latest version). ● Fetch data from the provided REST API. ● Display the data in a user-friendly and responsive layout. ● Implement sorting functionality for at least one field of the data. ● Ensure the page is responsive and mobile-friendly. ● Allow editing of user details through a modal. ● Unit tests are optional. ● Open API Resource ● Use the JSONPlaceholder API. This is a free fake online REST API for testing and prototyping.

Instructions: ● Setup and Fetch Data: ○ Set up a new Angular project. ○ Use the JSONPlaceholder API to fetch a list of users: https://jsonplaceholder.typicode.com/users.

● Data Display: ○ Display the fetched user data in a table. Include columns for name, email, and address.

● Sorting: ○ Implement sorting functionality for the name and email columns. ○ Users should be able to click on the column headers to sort the data in ascending or descending order.

● Mobile-Friendly Layout: ○ Ensure the page looks good on mobile devices. ○ Use a responsive design approach (e.g., flexbox, CSS grid) to adjust the layout for smaller screens.

● Modal for User Details: ○ Implement functionality to open a modal with user details on double-clicking a row. ○ The modal should display the user's name, email, and address. ○ The name and address should be editable, but the email should be disabled. ○ The name field should be required and only accept English characters. ○ The address field should not be required and allow English characters, numbers, and the special characters: " , - '. ○ Implement form validation for these constraints.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
