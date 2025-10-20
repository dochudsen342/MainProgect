declare module '*.module.scss' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare const __IS_DEV__: boolean
declare const __API__: string
