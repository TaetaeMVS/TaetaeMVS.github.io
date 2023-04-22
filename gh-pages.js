import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/taetaemvs/taetaemvs.github.io', // Update to point to your repository
  user: {
   name: 'Tae Yeong Kim', // update to use your name
   email: '53635845+TaetaeMVS@users.noreply.github.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);