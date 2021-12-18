# My Portfolio  [![Netlify Status](https://api.netlify.com/api/v1/badges/de573769-923c-468a-8505-15a10e85f81f/deploy-status)](https://app.netlify.com/sites/albertchittaphong/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

![Home](https://user-images.githubusercontent.com/83558122/143802251-962d38c2-c73c-4b11-986f-bb6c25ad9535.PNG)
My personal portfolio website! Click below to find out more.

[View App](https://albertchittaphong.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:albertchitta/personal-bio.git
$ cd personal-bio
```
## About the User <!-- This is a scaled down user persona -->
- Users can visit this website to learn about me, a web developer. If you're interested in hiring me or want to see how I built some of my projects step-by-step, this will be a great place to find your answers.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Authentication (Admin) - Admins can login and logout of the application using Google.
- CRUD (Admin) - Admins can create, read, update, and delete projects and technologies in private routes.
- React and Reactstrap for Modals
- Styled Components
- Responsive and mobile-friendly

## Video Walkthrough of My Portfolio <!-- A loom link is sufficient -->
https://www.loom.com/share/957e2bb77c4644abbbf3f6252105a4cc

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://albertchittaphong.netlify.app/)
- [Wireframes](https://docs.google.com/presentation/d/13uMScZtJwASq-cOPP9HU5YLvPGPFlOm3b74B4tf3rWE/edit?usp=sharing)
- [ERD](https://dbdiagram.io/d/61a448358c901501c0d66ea4)
- [Project Board](https://github.com/albertchitta/personal-bio/projects/1)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
Modal is used to show the details of a project including a loom video, a link to GitHub, and a link to the deployed website.
```
      <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#2f4550' }}>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: '#586f7c' }}>
          <StyledVideo>
            <iframe
              src={project.loomUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
            <p>{project.description}</p>
          </StyledVideo>
        </Modal.Body>
        <Modal.Footer as="div" bsPrefix="modal-footer">
          <StyledLinks>
            <a
              aria-label="github"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary github"
              onClick={handleClose}
            >
              <i className="fab fa-github" />
              <span> GitHub</span>
            </a>
            <a
              aria-label="website"
              href={project.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary website"
              onClick={handleClose}
            >
              <i className="fas fa-external-link-alt" />
              <span> Website</span>
            </a>
          </StyledLinks>
        </Modal.Footer>
      </Modal>
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
![about](https://user-images.githubusercontent.com/83558122/143803477-55d60c92-4f73-4ea1-965e-7b7171c6f9df.PNG)
![projects](https://user-images.githubusercontent.com/83558122/143803483-cda27fa6-5214-47b2-903a-02638a769167.PNG)
![technologies](https://user-images.githubusercontent.com/83558122/143803487-ffc5fc76-ecaf-4ed7-a967-dcb9a0f4db69.PNG)

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
