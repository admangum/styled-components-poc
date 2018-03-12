# Styled Components POC
An example of how a UI toolkit can use values exported by Vanilla HIG to create a Styled Components theme.

```
git clone https://github.com/admangum/styled-components-poc.git
cd styled-components-poc
yarn && yarn start
```

## Screenshot
![screen-shot](./screen-shot.png)

In this example, the components above are (conceptually) from different projects: the Button
is a resuable component from the ui-toolkit and the Header is a one-off from the app.
Both components reference colors that come from HIG via the [ToolkitThemeProvider](https://github.com/admangum/styled-components-poc/blob/master/src/app/App.js#L7).
