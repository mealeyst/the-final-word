import React from 'react';

import { COLORS } from '../00_quarks/colors';
import { FONT_WEIGHT } from '../00_quarks/typography';
import { getEnumKeys } from '../utils/enumKeys';
import { H2 } from './H2';

const COLOR_NAMES = getEnumKeys(COLORS)
const FONT_WEIGHT_NAMES = getEnumKeys(FONT_WEIGHT)

export default {
  title: 'Atoms/H2',
  component: H2,
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: COLOR_NAMES
      }
    },
    shade: {
      control: { type: 'range', min: 0, max: 10 }
    },
    weight: {
      control: {
        type: 'inline-radio',
        options: FONT_WEIGHT_NAMES
      }
    },
  },
};

const Template = (args) => {
  let color = args.color
  let weight = args.weight
  if (typeof args.color === 'string') {
    color = COLOR_NAMES.indexOf(args.color)
  }
  if (typeof args.weight === 'string') {
    weight = FONT_WEIGHT_NAMES.indexOf(args.weight)
  }
  return <H2 {...args} color={color} weight={weight} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Heading Level 2',
  color: COLORS.GREY,
  shade: 0,
  weight: FONT_WEIGHT.NORMAL
};
