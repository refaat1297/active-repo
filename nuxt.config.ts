// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // extends: '../shared-repo',
  // extends: 'github:refaat1297/shared-repo',
  // extends: '../new-shared-repo',
  extends: 'bitbucket:refaat1297-workspace/workspace-shared',

  runtimeConfig: {
    public: {
      GIGET_AUTH: process.env.GIGET_AUTH,
    }
  }
})
