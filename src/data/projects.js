// src/data/projects.js
import img from "../assets/websiteimg.svg"; // Adjust the path as necessary
import img2 from "../assets/todo.png"
import img3 from "../assets/gci.png"
import img4 from "../assets/movietheatresite.png"

const projects = [
  {
    title: "The Secure Todo App",
    description: "The Secure Todo Application is a full-stack web application designed to provide users with a secure and interactive platform for managing their personal tasks. This project stands out for its focus on user security and its elegant, responsive user interface.",
    imageUrl: img2,
    buttonText: "Github",
    buttonLink: "https://github.com/hponukumati/to-do-app", // Replace with your actual project link
  },
  {
    title: "Asterisk- Things to do if bored",
    description: "This is a website which can be used when a person is feeling bored",
    imageUrl: img, // Use the imported image directly
    buttonText: "Github",
    buttonLink: "https://github.com/hponukumati/asterisk-vercel", // Replace with your actual project link
  },
  {
    title: "Gesture Command Interface",
    description: "This project is a gesture-based application launcher that uses a webcam to recognize hand gestures (showing 1 through 5 fingers) and opens corresponding applications on macOS. A simple GUI is provided to map gestures to specific applications.",
    imageUrl: img3,
    buttonText: "Github",
    buttonLink: "https://github.com/hponukumati/gci.git", // Replace with your actual project link
  },
  {
    title: "Movie Theatre Website",
    description: "This project is a End to end movie theatre website which has been through extensive testing to make sure that users have a great experience.",
    imageUrl: img4,
    buttonText: "Github",
    buttonLink: "https://github.com/hponukumati/movie-theatre-website.git", // Replace with your actual project link
  },
  // Add more projects as needed
];

export default projects;
