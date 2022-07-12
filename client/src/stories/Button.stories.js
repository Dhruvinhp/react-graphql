import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes :{handleClick:{action:"handleClick"}},
}

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Click",
    size: "md",
}

export const Green = Template.bind({});
Green.args = {
    backgroundColor: "green",
    label: "Click",
    size: "md",
}


export const Small = Template.bind({});
Small.args = {
    backgroundColor: "green",
    label: "Click",
    size: "sm",
}


export const Large = Template.bind({});
Large.args = {
    backgroundColor: "green",
    label: "Click",
    size: "lg",
}

export const LongLabel = Template.bind({});
LongLabel.args = {
    backgroundColor: "green",
    label: "something to work with long label",
    size: "md",
}