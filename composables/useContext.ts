export const hello = () => {
  const nuxtApp = useNuxtApp();
  return nuxtApp.provide('hello', (name: string) => `Hello ${name}!`);
};
