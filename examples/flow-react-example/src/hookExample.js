/* @flow strict */

import * as React from "react";

export const foo = function(x: { +person: { +name: string, +age: number } }) {
  return x.person.name;
};

type Props = {
  +person: { +name: string, +age: number },
  +children: React.Node
};

export class make extends React.Component<Props> {
  render() {
    return (
      <div>
        {" "}
        {this.props.person.name} {this.props.children}{" "}
      </div>
    );
  }
}

export const makeRenamed = make;

export default make;
