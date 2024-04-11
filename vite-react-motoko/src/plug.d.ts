// plug.d.ts
// You can place this in a .d.ts file in your project.
// Ensure this file is included in your tsconfig.json.

export {}; // This line makes this file a module and not a script. Necessary for augmenting types.

declare global {
  interface Window {
    ic: any;
  }
}
