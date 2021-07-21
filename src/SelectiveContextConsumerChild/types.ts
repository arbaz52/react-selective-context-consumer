export interface ISelectiveContextConsumerChildProps<Value> {
  value: Value;
  children: (value: Value) => React.ReactNode;
}
