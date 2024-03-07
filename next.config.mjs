/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVaillaExtract = createVanillaExtractPlugin();
const nextConfig = {};

export default withVaillaExtract(nextConfig);
