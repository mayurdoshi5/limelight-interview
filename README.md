# Limelight - Front-End Developer Test (Angular)


>Please do not share your solution or this document over a cloud-hosted code repository. Solution can be shared through a zipped file over email or private link through file sharing systems (eg. Google Drive).

## Running the code
1. `npm install`
2. `ng serve`
3. view at localhost:4200

## Overview
This Front End developer test contains requirements to build a simple web app.

In general, we are looking for the way you approach the problem at hand and how you can write a clean, concise, and readable solution.

The three main aspects that we will be assessing are: [see Implementation Notes](#implementation-notes)

1. API Management
2. State management & storage
3. UI/UX (styling code management)


You are encouraged to add notes to the bottom of this README, or in a separate file that may contain:
- Step-by-step on how to run / execute your solution (if applicable)
- Any assumptions that you may have made
- Any other thoughts / design / architectural decisions that you may have made


The solution should be purely front-end solution
You should be using Angular 4+
No back-end technologies (Java, C#, Python, PHP, etc)


You’ll be working against a mock API, provided by: https://jsonplaceholder.typicode.com

## Rules
1. You may not delete any files
2. You may add as many files as you'd like
   > **Note**: You are encouraged to add files to enhance your solution. This repo only provides the basics to allow you to get started.
3. You may not delete any code that already exists.
4. You may edit any file except the files in the [model](src/app/models/) directory
## Implementation Notes

### API Management

Your data loading must be structured such that you minimize calls to the API. You should only call it if that part of your state has not yet been loaded. A [helper service](src/app/api/api.service.ts) has been preconfigured with all the CRUD functions you might need. You can use these helpers to access the api. Your functions to access the api can either be added to `api.service.ts` or can be added elsewhere.

### State Management & Storage

The main point of emphasis in this exercise is to demonstrate your ability to manage state efficiently. Be very mindful of what data you are selecting, ensuring you’re only taking what you need.

#### NGXS

The documentation for ngxs can be found [here](https://www.ngxs.io/).

Two NGXS states have been preconfigured for you, [user.state](src/app/store/user.state.ts) and [todo.state](src/app/store/todo.state.ts), along with sample action classes in the same directory. You will add selectors and actions to each to manage your state.


#### Models
There are a couple of model files in the [models](src/app/models/) directory. **These files are not to be edited**. Use the structure they provide to inform how you structure your states and selectors

#### User State
[The user state](src/app/store/user.state.ts) holds information about the logged in user.The actions to mutate this state should be added [here](src/app/store/user.action.ts)

#### Todo State
[The todos state](src/app/store/todo.state.ts) holds information about the list of todos. The actions to mutate this state should be added [here](src/app/store/todo.action.ts)

#### Miscellaneous

1. In addition to demonstrating your skills in ngxs, you should do everything you can to show you have a strong command of RXJS.
2. Every aspect of your solution will be considered, so pay attention to your coding style as well as the actual logic of your solution.

## UI/UX

A pretty design is not the main part of this exercise, however it is very important that you have consistent styling throughout. Keep consistent input styling, padding between elements, etc, and be sure to showcase some css knowledge to demonstrate how you would structure the styling part of a UI solution.
