import React from 'react';
import { Link } from '../01_atoms/Link'
import MobileNavigationDrawer from './MobileNavigationDrawer';

export default {
  title: 'Molecules/MobileNavigationDrawer',
  component: MobileNavigationDrawer
};

type ArgTypes = {
  closed: boolean,
}


const Template = (args: ArgTypes) => {
  return(
    <MobileNavigationDrawer absolute={false} closed={args.closed}>
      <Link href="#" light={false}>Home</Link>
      <Link href="#" light={false}>Menus</Link>
      <Link href="#" light={false}>Gallery</Link>
      <Link href="#" light={false}>Press</Link>
      <Link href="#" light={false}>Contact</Link>
    </MobileNavigationDrawer>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  closed: false
};