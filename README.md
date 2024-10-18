# Test notes

## Local development
To start the project run `npm run dev`
To start the styleguide `npm run storybook`

## Production deploys
Site - https://glittering-douhua-257d09.netlify.app/
Styleguide - https://unique-sopapillas-0afe88.netlify.app

## Added functionality
- Added a basic toggle for events/templates tabs as shown in the designs.
- Added some basic frontend search functionality for events.
- Added a custom Node API endpoint that adds photos for each event result before being sent to the frontend as direct access to the Eventology API was causing a CORS error for localhost.

## Env Variables Required
UNSPLASH_API_KEY

----

![image](/public/eventogy-logo.svg)

# React Tech Task

## OVERVIEW

You are tasked to build a simple interface against a slice of a REST API by forking this GitHub repository containing the foundation of a React + Next.js application.

- API Endpoint - https://www.eventogy.com/api/events.json
- For images, feel free to use an open API like unsplash or picsum to get a unique image for each card
- Design Mock Up:

![dashboard](https://github.com/user-attachments/assets/636d4899-afb2-4c48-9f42-1e4a56292e0c)


## OBJECTIVES

Demonstrate that you're capable of planning and structuring your code in a way that allows for reusable, scalable, and well-thought-out components that will interact with a RESTful public API.
Demonstrate your attention to detail in the presentation layer - does it work as expected, is it responsive, and are there any finishing touches.

## SPECIFICATIONS

You can (and should) use any and all resources at your disposal to complete the task. We suggest using style libraries like **Tailwind** and prebuilt component libraries, like **Shadcn**, rather than spending time manually styling the page.

We’re looking to see how much you can achieve in 2, 3 hours, but feel free to spend extra time in order to complete a subtask or fix a bug. Make sure you commit your project to the forked Git repository and periodically commit as you progress in the task.

### Bonus points

Use UI interactive effects for elements such as loading the event cards. Convert the project to Typescript if you're feeling extra brave.
