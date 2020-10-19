# Flask_React
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="https://i.redd.it/a3x3vrlnc1621.jpg" alt="Logo" width="700" height="600">
 # <img src="/images/tumblr_4ed011d2feb1b65e438303967b5dc78a_658e3f0c_540.gif" alt="Logo" width="300" height="200">
  
  <h3 align="center">A Fullstack Anime Database Website</h3>

  <p align="center">
    An awesome MAL-cloned website built as a capstone project for Duke CS316
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)


<!-- ABOUT THE PROJECT -->
## About The Project

![Landing Page][landing-page]

![Detail Page][detail-page]

![Search Page][search-page]

![Livesearch Page][livesearch-page]

This is a fullstack group project created as a MAL-cloned website. In case you do not know what MAL is, it is the largest anime database website. We pulled and cleaned data from MAL's exposed APIs, then populate those into our SQL database. We then built a Flask backend that can communicate with a React frontend through json send via http. This is a fully-responsive single page application, rather than server-sided rendered (like the official MAL). Its UI is inspired by Google Material Design and powered by the great Material-UI library. All hail weebs :)

Features:
* Beautiful, Responsive, and Clean representation of data
* Loading indicators while waiting for json
* Complex and reusable forms for submitting search and writing reviews
* On-the-fly live search which pulls autosuggest recommendations from the backend without excessive API calls (achieved via memoizing keystrokes)

Of course, if you are watching Oregairu, best waifu is Iroha-chan >//////<

### Built With
This project is built and powered mainly by the following technologies.
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Formik](https://formik.org/)
* [Material-UI](https://material-ui.com/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
* [MySQL](https://www.mysql.com/)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation
To download the requisite modules for the front-end, run the following code in .\Flask_React\frontend
```
npm install
```

For the backend, run the following commands in .\Flask_React\backend
```
pip install -r requirements.txt
```

### Getting Started
To start the frontend, run the following command in .\Flask_React\frontend
```
npm start
```

To start the backend, run the following command in .\Flask_React\backend
```
flask run
```
After the frontend and backend has started, all of the working features in the frontend should be usable.
<!-- ROADMAP -->
## Roadmap
Reviews  
User Profile  
Watch Later  
Favorite Animes

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/nithiwatter/Flask_React](https://github.com/nithiwatter/Flask_React)


<!-- MARKDOWN LINKS & IMAGES -->
[landing-page]: /images/landing.PNG
[detail-page]: /images/detail.PNG
[search-page]: /images/search.PNG
[livesearch-page]: /images/livesearch.PNG
