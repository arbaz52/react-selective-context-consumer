# Why this Package?

This is a generic implementation for an [issue](https://medium.com/@ryanflorence/react-context-and-re-renders-react-take-the-wheel-cd1d20663647#:~:text=A%20React%20context%20Provider%20will%20cause%20its%20consumers%20to%20re-render%20whenever%20the%20value%20provided%20changes.) that requires a workaround when using non-primitive value for context provider's value.

This library exports a component that can memoize the selected value (even an object) from the context. The child of this exported component will re-render if the selected value is changed/updated. The component follows `Render Props` pattern and expects a function that is passed the selected values from the context as parameters to function. The function is then expected to return a `React.FC`.

# Relevant Links

- [How to Create a React Library/Package](https://prateeksurana.me/blog/react-library-with-typescript/)
- [Workaround for Invalid Hooks Call Warning/Error](https://github.com/facebook/react/issues/14257#issuecomment-809702813)
