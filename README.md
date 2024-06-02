
# Orbital Witness Credit Usage Dashboard

## Requirements

- Node > 18
- Python 3.12.x
- Poetry


## Setup and Running

- setup with `./setup.sh` from the root
- start with `./start.sh` from the root
- visit `http://localhost:3000/dashboard`


## Running tests

- Back-end: in `/server` run `pytest`
- Front-end: in `/front-end` run `npm run storybook` followed by `npm run test-storybook` (you may also need `npx playwright install`).

## Decisions etc

I haven't written any Python for several years and the Python experience I do have was largely self-taught, so please excuse any rough edges and weirdness. I chose Flask because I've used it before, but added OpenAPI schema validation as this was something I've done in Node but not in Python so wanted to learn how to do it.

For the front-end I chose Next.js. I've only dabbled with Next before so thought this was a good opportunity to do something concrete with it, and a good reason to play around with server-side data fetching. I used Material UI for the table as this is something I've used a lot recently, with Recharts for the bar graph. I've never used this before, but it seems to be widely used and had a nice-looking API and set of docs. Overall, the styling of the dashboard is very basic. With more time I would spend more time on this and e.g. make the page responsive.

In terms of testing, for the back-end I've not written any Python tests before (!) but went with pytest as I'm aware this is a solid and popular framework. I concentrated the back-end tests on the scoring algorithm as this was the trickiest part of the spec and the importance of accuracy had been emphasised. With more time I would have written more test cases for the overall cost calculation, though I think the individual parts have been tested comprehensively. For the front-end I've added some basic Storybook tests focussed around the table sorting functionality. With more time I'd add Jest unit tests, starting with the sorting algorithm.

With the setup, fiddling around and learning new stuff I did end up spending more time than you outlined but I thought it was worthwhile as I managed to fill in some knowledge-gaps.
