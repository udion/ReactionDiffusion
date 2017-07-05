# ReactionDiffusion
javaScript for simulating the reaction diffusion between two chemicals on a **2D surface** which follow **Gray-Scott model**

Initially the whole canvas (*petri dish*) is filled with only one chemical, **A**, which is representedd by **white** canvas. Later a little area on canvas is also filled with chemical **B** which is represented as **black** reigon on the canvas, as the diffusion proceeds one can see how the black reigon spreads out, meaning more of **B** is produced and spread, the reaction represented is actually of the type that *2 B units (molecules/atom) consume one A unit to produce other B unit* more details regarding the maths and reaction can be found [here](http://karlsims.com/rd.html)

An example of final image (*which will depend upon the initialisation of the petri dish*) is the following
<img src="https://github.com/udion/ReactionDiffusion/blob/interactive/images/initialstate0.png" align="left" height="100" width="100">
![i](https://github.com/udion/ReactionDiffusion/blob/interactive/images/initialstate0.png){:height="200px" width="200px"}
![f](https://github.com/udion/ReactionDiffusion/blob/interactive/images/diffusionpattern0.png){:height="200px" width="200px"}

# Usages
clone the repository, go to the **src** directory and open the *index.html* in the browser
