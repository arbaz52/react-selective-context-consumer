# Installation

yarn: `yarn add selective-context-consumer`

npm: `npm install selective-context-consumer`

# About

Only re-render if the selected values from the context update/change not when the context value changes.

> Be sure to wrap the component which is using this library's component with `React.memo`.

# Repository

This library is meant to be open-source, for everyone to make it better.

Source code available at: [Github Repo: arbaz52/react-selective-context-consumer](https://github.com/arbaz52/react-selective-context-consumer)

# Example

[Gist: Using the library](https://gist.github.com/arbaz52/db6910d3e80bc4cfc365298bc996924e)

#### Single Value Selector

```jsx
<SelectiveContextConsumer
  context={YourContext}
  selector={(ValuesInContext) => ValuesInContext.ValueYouNeed}
>
  {(selectedValue) => <b>render: {selectedValue}</b>}
</SelectiveContextConsumer>
```

#### Multiple Values Selector

Most use-cases require extracting/selecting multiple values from the context. You can return an JSObject in the selector function but it will not have type definitions.

The workaround for it is to create a `memoized` callback for the selector function and pass it as the selector prop. This will make the parameters for the `children` function to have type definitions.

##### Selector Function:

```jsx
const selectorFunc = useCallback((context: IStateContext) => {
  const { beer, addBeer } = context;
  return { beer, addBeer };
}, []);
```

##### Usage:

```jsx
<SelectiveContextConsumer context={StateContext} selector={selectorFunc}>
  {({ beer, addBeer }) => (
    <>
      <button onClick={addBeer}>Beer: {beer}</button>
      <RendersCounter />
    </>
  )}
</SelectiveContextConsumer>
```

# Why this Package?

This is a generic implementation for an [issue](https://medium.com/@ryanflorence/react-context-and-re-renders-react-take-the-wheel-cd1d20663647#:~:text=A%20React%20context%20Provider%20will%20cause%20its%20consumers%20to%20re-render%20whenever%20the%20value%20provided%20changes.) that requires a workaround when using non-primitive value for context provider's value.

This library exports a component that can `memoize` the selected value (even an object) from the context. The child of this exported component will re-render if the selected value is changed/updated. The component follows `Render Props` pattern and expects a function that is passed the selected values from the context as parameters to function. The function is then expected to return a `React.FC`.

# Relevant Links

- [My Blogpost about the Implementation](https://medium.com/nerd-for-tech/reactjs-selective-context-consumer-939464e9ca02)
- [Gist: Using the library](https://gist.github.com/arbaz52/db6910d3e80bc4cfc365298bc996924e)
- [How to Create a React Library/Package](https://prateeksurana.me/blog/react-library-with-typescript/)
- [Workaround for Invalid Hooks Call Warning/Error](https://github.com/facebook/react/issues/14257#issuecomment-809702813)
