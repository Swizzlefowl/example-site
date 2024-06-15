import * as React from "react";
export type Prop = {
  name: string;
  age: number;
  profession: string;
};

export type Image = {
  title: string;
  src: string;
  width: number;
  height: number;
}
const Greetings: React.FC<Prop> = (prop: Prop) => {
    return (
      <div>
        <p> I am a big fan of {prop.name}</p>
        <p> He is {prop.age}</p>
        <p> He is a famous {prop.profession}</p>
      </div>
    );
};

export const CreateImage: React.FC<React.PropsWithChildren<Image>> = (props: React.PropsWithChildren<Image>) => {
  return (
    <div>
      {props.children}
      <img alt={props.title} src={props.src} width={props.width} height={props.height}></img>
    </div>
  )
};

export default Greetings;
