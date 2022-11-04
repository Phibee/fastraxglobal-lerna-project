import React from 'react';
import { Button, ButtonProps, TButtonSize, ButtonSizes } from '@fastraxglobal/shared';
import { Meta, Story } from '@storybook/react';
import '@fastraxglobal/shared/lib/assets/global.css';
import {getArrayToStringValues} from "../util";

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
    argTypes: {
        children: {
            type: {name: "symbol", required: true},
            table: {
                type: {summary: 'ReactNode'}
            },
        },
        elevation: {
            defaultValue: false,
            type: {name: "boolean", required: false},
            description: 'shadow',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'}
            }
        },
    },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Button',
  className: 'btn-primary'
};

Basic.argTypes = {
    size: {
        type: {name: "boolean", required: false},
        description: 'demo description',
        table: {
            type: {summary: getArrayToStringValues(Object.values(ButtonSizes))}
        },
        control: {
            type: 'select',
            options: Object.values(ButtonSizes),
        },
    },
    rounded: {
        defaultValue: true,
        type: {name: "boolean", required: false, value: true},
        description: 'rounded corners of button',
        table: {
            type: {summary: 'boolean'},
            defaultValue: {summary: 'true'}
        },
        control: {
            type: "boolean"
        }
    },
}

export const Sizes = Template.bind({});

Sizes.args = {
  className: 'btn-primary',
};

Sizes.decorators = [
  (e,  context) => {
    
    console.log({context})
    return (
      <>
        <Button {...(context.args as ButtonProps)} size="xs">
          Button xs
        </Button>
        <Button {...(context.args as ButtonProps)} size="sm">
          Button sm
        </Button>
        <Button {...(context.args as ButtonProps)} size="md">
          Button md
        </Button>
        <Button {...(context.args as ButtonProps)}>Button</Button>
        <Button {...(context.args as ButtonProps)} size="lg">
          Button lg
        </Button>
        <Button {...(context.args as ButtonProps)} size="xl">
          Button xl
        </Button>
      </>
    );
  },
];

