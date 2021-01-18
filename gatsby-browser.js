import React from 'react';
import { Layout } from './src/sections/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
