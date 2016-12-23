// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/3561e140bd9ec6c1dfd39d4ba350346044181fd0/react-hot-loader/index.d.ts
declare module 'react-hot-loader' {
// Type definitions for react-hot-loader 3.0
// Project: https://github.com/gaearon/react-hot-loader
// Definitions by: Jacek Jagiello <https://github.com/jacekjagiello/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react'

interface ErrorReporterProps {
  error: any
}

export interface AppContainerProps {
  children?: React.ReactElement<any>,
  errorReporter?: React.ComponentClass<ErrorReporterProps> | React.StatelessComponent<ErrorReporterProps>
}

export class AppContainer extends React.Component<AppContainerProps, {}> {}
}
