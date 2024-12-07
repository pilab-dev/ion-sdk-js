import type { Options } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: false, // disable code splitting
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ['cjs', 'esm'], // generate cjs and esm files
  minify: env === 'production',
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: env === 'development',
  target: 'es2024',
  outDir: env === 'production' ? 'dist' : 'lib',
  // external: ['grpc', '@improbable-eng/grpc-web', 'events', 'uuid', '@grpc/grpc-js', 'google-protobuf', 'sdp-transform'],
  //   entry: ['src/**/*.ts'], //include all files under src
  sourcemap: true,
};
