import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Desactivar la regla de variables no utilizadas
      '@typescript-eslint/no-unused-vars': 'off',
      // Desactivar la regla de variables sin definir
      'no-undef': 'off',
      // Desactivar la regla de tipado de 'unknown'
      '@typescript-eslint/no-explicit-any': 'off',
      // Desactivar cualquier otra regla específica que sea problemática
      'no-console': 'off',
    },
  },
];

export default eslintConfig;
