# Power BI Site Wrapper

A Simple site wrapper custom viz that allows you to insert any web page (or app) into power bi.

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


