## Weather Widget 

Coding exercise for a simple weather widget

You can see it live at https://madmaw.github.com/weather-widget/dist/

### Running

You can get the code up and running using 

`npm install`
`npm run serve`

Then open your web browser at

`http://localhost:8080`

### Design

I wanted to try and make sure that the Weather Widget and the Editor components could be separated out as easily as possible. In particular, it seemed that you would want to embed the weather widget in a separate page from the editor, via an iframe or something. For this reason I gave the editor and the widget separate actions and built them, as far as was possible, as though they were two separate react apps. I glued them together by making Container wrappers around each of them, which mediate between the two. The directory structure of the code also reflects this design decision, with the editor and the widget living in separate folders. 

I also used `react-thunk` to do some basic dependency injection of the services and allow me to get access to the State in the glue code. Unfortunately due to `react-thunk` only producing the top-level state for our actions, there is one place where the Widget code is aware of the top-level state, where it really should be receiving it's own State. I could have wrapped the `Dispatch` function passed to the componenet's `mapDispatchToProps` in the container to drill down to the correct State, but I thought for this exercise that would be overkill, so I just left a comment. 

As far as tooling goes, I used Webpack and TypeScript, which I think is fairly common right now. 

### Styling

I used Twitter Bootstrap for the styling. I didn't customise the style beyond what is supported in Bootstrap, so there are a few places where the colours/fonts don't match up with the sample and a few others where I probably should have created a class for spacing to ensure consistency moving forward. 


### Assumptions

* Unit testing wasn't part of the assignment
* On failure you want to see a retry button
* Loading screen displays a spinner
* Numbers should be rounded
* The weather image is just the ones available from OpenWeatherMap (which I scaled up)
* Selecting Celcius/Farenheit also changes wind speeds to Kilometers per Hour or Miles per Hour respectively