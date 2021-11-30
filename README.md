# DigiHome App
## A simple home automation app to manage all your home lights and thermostats

A simple Flask based Home Automation app where users can add, update and remove their home lights and thermostats information. Very simple and very easy to use application, useful for keeping track of your day-to-day home automation tasks.

#### Contains two main modules
- Ligt Module: Manage light states
- Thermostats Module: Manage thermostats states

## Features

- Developed using Powerful Flask, MongoDB and Python
- Simple, fast, secured and easy to use application
- Add your light/thermostats details
- Modify the existing light details (change light status, light color)
- Modify the existing thermostats details (change thermostat temperature)
- Delete the exisitng light/thermostats
- View all the logs easily
- Very flexible Flask APIs
- Can be hosted easily in cloud



## Tech

Dillinger uses a number of open source projects to work properly:

- [Flask] - Powerful Python Based Web Framework
- [MongoDB] - NoSQL based Database
- [GraphQL] - a query language for APIs and a runtime for fulfilling those queries with your existing data
- [Docker] - containerization tool


## Installation

DigiHome App requires [Python](https://python.org/) v3.5+ to run.

Install MongoDB using Docker (Docker and Docker Compose needs to be installed first)
```sh
cd DigiHome/backend
docker-compose up -d
```

Clone the repository first
```sh
git clone https://github.com/bickkysahani/DigiHome.git
```
and then
for backend
```sh
cd backend
# install requirements/libraries
pip install -r requirements.txt
# run project
python app.py
```

for frontend

```sh
cd frontend
# install requirements/libraries
npm install
#run project
npm run dev

```


  
