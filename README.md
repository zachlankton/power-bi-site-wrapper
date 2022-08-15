# Power BI Carrier Demo

This is my first Power BI Visual that I made as a demo for a friend.

I used react for the majority of the build. I had to figure out how to make functional components work as the [tutorial](https://docs.microsoft.com/en-us/power-bi/developer/visuals/create-react-visual) only shows you how to integrate react using class-based components.

The entry point to this code is `src/visual.ts`. But most of the Component is in the `src/App.tsx` file.

Its primary purpose was to be a table with clickable rows that would expand into a details view.

To set up, drag the columns you want in the table into the `Summary` section and the columns you wish to have in the details view into the `Details` section.

![image](https://user-images.githubusercontent.com/2927894/182136352-a427b1ef-236e-4872-9cfe-90da5d809098.png)

This will result in a table like so:

![image](https://user-images.githubusercontent.com/2927894/182137627-2abdaac1-63c2-4fd5-8a24-1593c5c1c6ae.png)

---

# Development

Need to setup pbiviz -> https://docs.microsoft.com/en-us/power-bi/developer/visuals/environment-setup?tabs=windows

then run

```
pbiviz start
```

# Build and Package

Run:

```
pbiviz package
```

The custom viz will be in the `dist` folder. You can then [import the custom visual into power bi using that file](https://docs.microsoft.com/en-us/power-bi/developer/visuals/import-visual)​

---

# To Do

Currently, the "Overdue" red highlight is hardcoded to look for a field/column named `DUE`

A little more time needs to be invested in learning the Power BI custom visual API to learn how to incorporate custom options and custom settings like [conditional highlighting](https://docs.microsoft.com/en-us/power-bi/developer/visuals/conditional-format).
