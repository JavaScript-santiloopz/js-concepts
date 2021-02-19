# Runtime

There is a `Global Execution Context`, and everytime a `callable object` is `Invoqued`, a new `Scoped Execution Context` gets added on top of the `Execution Stack`. When the new exectution context is finished falls back to the last one in the same position that it left.

### Execution Context