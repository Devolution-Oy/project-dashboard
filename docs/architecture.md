# Project Dashboard architecture

## Database
Firebase firestore database
### User information
- email & password
- Name : string
- Company : string
- Phone number : string
- Unique ID : string
- projects : array of strings
- display name : string

### Project
- Unique ID
- name : string
- repositories : array of strings
- budget : number

## User interface
- JavaScript React Application
- Hosted on Firebase
- Fetch data from Github API
- Simple database read/write actions

## Backend services
- Firebase functions
- Fetching and storing data to database if front end can't fetch/store data directly
 
## Github API integration
- project repository name
- repository description
- issues
- developers
