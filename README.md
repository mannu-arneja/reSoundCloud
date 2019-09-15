<!-- Brief explanation of what the app is and does
Link to live site
Discussion of technologies used
Delve deep into ~2 features that show off your technical abilities. Discuss both the challenges faced and your brilliant solutions.
Code snippets to highlight your best code (markdown code snippets, NOT screenshots) -->


# reSoundCloud

**WIP**

reSoundCloud, an echo of SoundCloud, is a platform to stream and share audio.

## Live Site
https://resoundcloud.herokuapp.com

## Technologies
- Frontend - ReactJS, Redux, Webpack, SASS
- Backend MVC - Ruby on Rails, JBuilder
- Database - PostgreSQL
- Cloud storage - AWS S3

## Features
- Audio Playback through the player component persists throughout inter-component navigation
- Users can upload audio files with a title, image, and description. These tracks are associated with the author and shared on a index 'discover' page for all users.
- User accounts are made and authenticated (using BCrypt), and persist through broswer refreshes via bootstrapping session.

<!-- ![alt text](app/assets/images/frontHero.jpg) -->

## Future Features
- Comment on tracks
- Waveform display