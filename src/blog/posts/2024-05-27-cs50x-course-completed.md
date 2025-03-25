---
title: CS50x Course Completed
desc: About me completing the CS50’s Introduction to Computer Science course.
date: 2024-05-27T21:47:00+0800
categories: ["cs50", "cs50x", "python", "flask", "sql"]
---

On 23 May 2024, at long last, I completed [CS50’s Introduction to Computer Science](https://cs50.harvard.edu/x/2024/), also known as CS50x, course!

After finishing [Week 9 of CS50x](2024-04-15-cs50x-week-9-completed.md), I began to brainstorm ideas for the [final project](https://cs50.harvard.edu/x/2024/project/), in terms of both project type and which language or tech stack to build. Eventually, I chose to build a blogging application with Flask, SQL and Bootstrap, and name the project CS50 Flask Blog.

You can watch a demonstration of CS50 Flask Blog in this video:

https://www.youtube.com/watch?v=eH8Tq57KzXs

CS50 Flask Blog includes the following features:
- Create a user account with a password
- Write, edit and delete blog posts
- Rich text editor for writing and editing blog posts
- Change username and password

The concept of CS50 Flask Blog was a blogging application that can be run and used on a local machine. In addition, CS50 Flask Blog was designed to prioritise user privacy, as it requires users to create an account and log in to write blog posts, thus making it a good fit for private blog posts.

Another reason I decided to create a blogging application as my final project for CS50x was because I wanted to make use of and apply the Flask skills and knowledge I learned from Week 9 of CS50x. While my (current) speciality is front-end web development, I find Flask in conjunction with SQL useful for projects that need a database, like a blogging platform.

The idea of requiring users to log in to use the application's main functions was inspired by the [Finance problem set](https://cs50.harvard.edu/x/2024/psets/9/finance/) from Week 9 of CS50x. I based the code of the user account registration, logging in and logging out functions on the Finance problem set, but the rest of CS50 Flask Blog's code was written from scratch.

To make further good use of the user account feature and the SQL database of CS50 Flask Blog, I also added the ability for users to change their username and password, and use the SQL database to store users' blog posts.

During my research into building Flask apps, I learned about [Flask Blueprints](https://flask.palletsprojects.com/en/2.3.x/blueprints/), which are great for making a Flask project modular, scalable and maintainable. I discovered an excellent [Real Python tutorial for building a scalable Flask web project from scratch](https://realpython.com/flask-project/). Using Flask Blueprints was new to me, since this was not taught in CS50x's Flask lessons.

When I was working on CS50 Flask Blog, I was also looking for other tutorials about building a blogging project with Flask for reference and inspiration. I ended up referring to Noran Saber Abdelfattah's guide, ["Building a Flask Blog: A Step-by-Step Guide for Beginners"](https://medium.com/@noransaber685/building-a-flask-blog-a-step-by-step-guide-for-beginners-8bffe925cd0e) for how to write the functions to edit and delete posts, but I wrote different code than Abdelfattah's guide to accommodate CS50 Flask Blog's user account features.

After finishing the basic features of creating, editing and deleting posts, I wanted to incorporate a proper text editor into CS50 Flask Blog, so users have actual options to format the text of their blog posts, instead of being stuck with a basic text area input field. After searching the web for adding a text editor into a Flask application, I discovered [Flask-CKEditor](https://flask-ckeditor.readthedocs.io/en/latest/index.html), which allowed integration of the rick text editor CKEditor into a Flask project. Flask-CKEditor was another new thing I learned from building CS50 Flask Blog, so it also trained me to read and understand technical documentations more.

Per CS50x's instructions, after the process of writing the code and testing the project was done, I started writing a Read Me for CS50 Flask Blog, by introducing and describing the project and its features, explaining the file structure and the purposes of the files used in the project, listing development dependencies, as well as laying out the steps required to run the project locally.

For the demo video, which was required to submit the final project, I used Bandicam to record a demo video and Kdenlive to edit the video, which allowed me to practice video editing. I searched for a stock clip and a stock music on Pixabay to add flavour to my demo video.

After submitting CS50 Flask Blog as my final project, I successfully claimed my CS50x certificate! You can also [view the PDF version of my CS50x certificate](https://cs50.harvard.edu/certificates/8cb0f5a4-4107-4df6-8abc-cfab3a437367).

<img src="{% src 'CS50x-certificate_bercpp.avif' %}" srcset="{% srcset 'CS50x-certificate_bercpp.avif', [260, 649, 980, 1320, 1580, 1830, 2048] %}" sizes="(min-width: 1020px) calc(54.9vw - 67px), calc(96.57vw - 30px)" alt="Helen Chong's CS50x certificate" width="2746" height="1588" loading="lazy">

Taking the CS50x course had been a great opportunity for me to learn about computer science, how to learn different programming languages and practice problem-solving skills with its problem sets. I am continuing to focus on front-end web development, but I hope I could carry what I learned from CS50x in my developer journey.