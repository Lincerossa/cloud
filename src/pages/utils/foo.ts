type TFoo = (e: string) => {
  name: string
}

const foo : TFoo = (e) => {
  return {name: e}
}

export default foo