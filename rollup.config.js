import typescript from '@rollup/plugin-typescript';
import { folderInput } from 'rollup-plugin-folder-input'
import { obfuscator } from 'rollup-obfuscator';

export default {
  input: 'src/**/*.ts',
  output: {
    dir: 'dist',
  },
  plugins: [
    typescript(),
    folderInput(),
    obfuscator()
  ],
};