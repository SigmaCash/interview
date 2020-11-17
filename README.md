# React Native Interview Project
This is a small project for a react native interview.
There is not timeline on how long this interview needs to be, some people says the basic version would not take more than 1 hour ( with all the setup already in place )... And the more complete version would take 1 or 2 days , if you do have a full time work position.

## Screens

<p style="justify-content: space-around;">
  <img src="https://github.com/SigmaCash/interview/blob/react-native/Tela%20Inicial.png?raw=true" width="250"/>
  <img src="https://github.com/SigmaCash/interview/blob/react-native/Lista%20de%20FOTOS.png?raw=true" width="250"/>
  <img src="https://github.com/SigmaCash/interview/blob/react-native/Descricao%20da%20FOTO.png?raw=true" width="250"/>
</p>

## Goal
Create a React Native application that retrieves and displays the photos from a public URL

## UX/UI
Please, try to follow the structure from the screens above.
Link to the figma board : https://www.figma.com/file/QdtVLHNJgR9Z55DFlggrv1/Desafio?node-id=0%3A1


<p style="justify-content: space-around;">
  <img src="https://github.com/SigmaCash/interview/blob/react-native/Screenshot%20from%202020-11-16%2023-05-07.png?raw=true"/>
</p>

## Retrieving data
We recommend the use of axios.

Use this URL with the GET method : https://c37612585d5c9984c7757c2b1446fe84.m.pipedream.net
This will return you a simple JSON structure : 

```json
[{
    "id" : 1,
    "url" : "https://images.pexels.com/photos/1669096/pexels-photo-1669096.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "title" : "Christmas Tree",
    "description" : "A Green XMas Tree !"
},
{
    "id" : 2,
    "url" : "https://images.pexels.com/photos/1671878/pexels-photo-1671878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "title" : "Christmas Ornament",
    "description" : "An Ornament !"
},
  {...},
  ...
]

```

## Bootstrapping the project
Up to you, we recommend [create-react-native-app](https://github.com/expo/create-react-native-app).
But as always, if you have any other project that you want be based on, please do it.

## Submitting the solution
Fork this repository to a repository on your own github account and add the solution there. Show good branching and committing strategy, open a pull request with the solution to the branch **react-native**, and add Lucas as a reviewer (@bolacha).  It should be clear how to build and run the project locally.

## Bonus (don't need to be in the below specific order)

* Use ES6 syntax including arrow functions, destructuring and async/await
* Use of Promises where you feels it's needed
* Use of styled-components/native - https://styled-components.com/
* Use of react-navigation - https://reactnavigation.org/
* Use of axios with Instance configuration, allowing the configuration of interceptors.
* Use of redux
* Use of redux-rhunk or redux-saga
* Adding a spinner when information is loading
* Deal with errors coming from the backend
* Some sort of Unit Test
* Some sort of Integration Test
* Divide the application in different pages and use a router
* Show common tools used for you daily development environment (linters, code formatter, git workflow, docker and so on)
* Deploy the project somewhere

