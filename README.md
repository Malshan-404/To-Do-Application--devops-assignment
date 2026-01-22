To-Do Web Application

Group Information
Student 1 : (K. M. P. Malshan  Aberathna ) - [(ITBIN-2313-0001 )] - Role: DevOps Engineer
Student 2 : [Full Name as in LMS] - [Student ID] - Role: Frontend Developer
Student 3 : [K.A.P.T. Iddamalgoda] - [ITBIN-2313-0141] - Role: UI/UX Designer


Project Description
The To-Do Web Application is a client-side task management system developed using HTML, CSS, and vanilla JavaScript.  
The application allows users to manage daily tasks by adding new tasks, marking tasks as completed, deleting tasks, and filtering tasks based on their completion status.

The application uses 'browser localStorage' to persist task data, ensuring tasks remain available even after refreshing or reopening the browser.  
Multiple HTML pages are used to display:
- All tasks
- Active (incomplete) tasks
- Completed tasks  

A complete ' CI/CD pipeline '  is implemented using ' GitHub Actions ' , and the application is deployed as a static website using  ' GitHub Pages '.



Live Deployment
Live URL  :  https://malshan-404.github.io/To-Do-Application--devops-assignment/


 Technologies Used 
- HTML5
- CSS3
- Vanilla JavaScript
- Browser LocalStorage
- GitHub Actions (CI/CD automation)
- GitHub Pages (Deployment platform)



 Features
- Add new tasks using an input field
- Mark tasks as completed using a toggle icon
- Delete tasks individually
- Filter tasks by status (All / Active / Completed)
- Display task completion counter (Completed / Total)
- Responsive UI for mobile and desktop devices
- Persistent data storage using localStorage


Branch Strategy 
We implemented the following branching strategy :

Main  
 - Production-ready branch  
 - Automatically deployed using GitHub Actions  

Develop  
  - Integration branch  
  - Used for testing and validating features before production  

Feature  
  - Feature-specific development branches  
  - Examples:
    - feature/design-changes
    - feature/conflict-demo

This strategy ensures clean code management, controlled deployments, and minimized merge conflicts.



Individual Contributions

(Malshan) – DevOps Engineer
- Initialized Git repository and configured branch structure
- Implemented GitHub Actions CI workflow (ci.yml)
- Implemented GitHub Actions deployment workflow (deploy.yml)
- Configured automatic deployment to GitHub Pages
- Managed merges between feature, develop, and main branches
- Example commits :
  - chore: initial repository setup
  - ci: add GitHub Actions CI workflow
  - deploy: configure GitHub Pages deployment



(Adithya) – Frontend Developer
- Implemented core JavaScript logic (app.js)
- Developed task creation, deletion, and toggle functionality
- Implemented task filtering logic using data attributes
- Integrated localStorage for persistent task storage
- Example commits:
  - feat: add task creation logic
  - feat: implement task filtering
  - feat: add localStorage support



(Pasindu) – UI/UX Designer
- Designed responsive UI using CSS
- Implemented navigation between task views
- Styled task list, buttons, and completion indicators
- Improved user experience and visual consistency
- Example commits:
  - style : add responsive layou
  - style : improve navigation UI
  - style : enhance task list design



Setup Instructions

Prerequisites
- Node.js (version 18 or higher)
- Git
- Modern web browser (Chrome, Firefox, Edge)

 Node.js is required for CI/CD workflows and development tooling, even though the application runs as a static site.


Installation
bash
 - Clone the repository
    git clone https://github.com/your-username/your-repository-name.git

 -Navigate to project directory
      cd your-repository-name

 -Install dependencies (for CI/CD environment)
      npm install

 -Run development server (optional)
       npm run dev
