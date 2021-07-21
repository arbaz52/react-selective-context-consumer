export interface ISelectiveContextConsumerProps<Context, Value> {
  context: React.Context<Context>;
  selector: (context: Context) => Value;
  children: (value: Value) => React.ReactNode;
}
