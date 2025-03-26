<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>louisjea Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Ari Louis-Jeune</h1>
    <p>Welcome to my portfolio website!</p>
    <nav>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="about">
  <h2>About Me</h2>
  <div class="about-container">
    <img src="278327953_501173525015585_4631645230951929834_n.jpg" alt="Self Insert of me" class="about-image">
    <div class="about-text">
      <p>Hi! I'm [Ari Louis-Jeune], a passionate web developer with a love for coding and graphic design.</p>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
      </ul>
      <h3>Hobbies & Interests</h3>
      <ul>
        <li>Coding</li>
        <li>Ultimate Frisbee</li>
        <li>Gaming</li>
      </ul>
    </div>
  </div>
</section>

  <section id="projects">
    <h2>My Projects</h2>
    <ul>
      <li>
        <h3>Project 1: Web App</h3>
        <p>This is a brief description of my web app project. It includes features like user authentication and a dynamic dashboard.</p>
        <a href="https://github.com/your-repo/project1" target="_blank">View on GitHub</a>
      </li>
      <li>
        <h3>Project 2: Portfolio Website</h3>
        <p>This portfolio website is built using HTML, CSS, and JavaScript. It's a simple project to showcase my skills.</p>
        <a href="https://your-portfolio.com" target="_blank">Live Demo</a>
      </li>
    </ul>
  </section>

  <section id="contact">
  <h2>Contact Me</h2>
  <p>Have a question or want to connect? Send me a message below.</p>
  
  <form action="https://formsubmit.co/louisjea@uab.edu" method="POST">
    <!-- Hide the spam-trap field -->
    <input type="hidden" name="_captcha" value="false">

    <!-- Name Field -->
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required>

    <!-- Email Field -->
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required>

    <!-- Message Field -->
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

    <!-- Submit Button -->
    <button type="submit">Send Message</button>
  </form>
</section>

  <footer>
    <p>&copy; 2025 [Ari Louis-Jeune]. All rights reserved.</p>
  </footer>
</body>
</html>
