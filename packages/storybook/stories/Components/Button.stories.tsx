import React from 'react';
import {
  Button,
  ButtonProps,
  ButtonSizes,
  ButtonVariants,
} from '@fastraxglobal/shared';
import { getArrayToStringValues } from '../../util';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: { name: 'symbol', required: true },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    disabled: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
      description: 'Disables the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    loading: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
      description: 'loading progress',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    outline: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
      description: 'background-color will be border-color and vice-versa.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    ripple: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
      description: 'ripple effect',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    shadow: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
      description: 'shadow',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    controls: { expanded: true, sort: 'requiredFirst' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Button',
};

Basic.argTypes = {
  size: {
    type: { name: 'symbol', required: false },
    description: 'demo description',
    table: {
      type: { summary: getArrayToStringValues(ButtonSizes) },
    },
    control: {
      type: 'select',
      options: ButtonSizes,
    },
  },
  rounded: {
    defaultValue: true,
    type: { name: 'boolean', required: false },
    description: 'rounded corners of button',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
    control: {
      type: 'boolean',
    },
  },
  variant: {
    type: { name: 'symbol', required: false },
    description: 'demo description',
    table: {
      type: { summary: getArrayToStringValues(ButtonVariants) },
    },
    control: {
      type: 'select',
      options: ButtonVariants,
    },
  },
};

export const Sizes = Template.bind({});

Sizes.args = {};

Sizes.decorators = [
  (e, context) => {
    console.log({ context });
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

export const Variants = Template.bind({});

Variants.args = {};

Variants.decorators = [
  (e, context) => {
    console.log({ context });
    return (
      <>
        <Button {...(context.args as ButtonProps)} variant="primary">
          Primary
        </Button>
        <Button {...(context.args as ButtonProps)} variant="secondary">
          Secondary
        </Button>
        <Button {...(context.args as ButtonProps)} variant="info">
          Info
        </Button>
        <Button {...(context.args as ButtonProps)}>Success</Button>
        <Button {...(context.args as ButtonProps)} variant="danger">
          Danger
        </Button>
        <Button {...(context.args as ButtonProps)} variant="warning">
          Warning
        </Button>
      </>
    );
  },
];

export default meta;
