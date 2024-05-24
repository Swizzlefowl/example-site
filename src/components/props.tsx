import * as React from "react";
export type Prop = {
  name: string;
  age: number;
  profession: string;
};

const Greetings: React.FC<Prop> = (prop: Prop) => {
    return (
      <div>
        <p> I am a big fan of {prop.name}</p>
        <p> He is {prop.age}</p>
        <p> He is a famous {prop.profession}</p>
      </div>
    );
};

export default Greetings;
