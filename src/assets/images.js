// All image assets centralized for easy management
// Use absolute paths from public directory for hosting compatibility

export const images = {
  // Profile images
  profile: '/assets/sagar.png',
  
  // Favicon
  favicon: '/favicon.svg',
  
  // Certificate provider logos (external CDN)
  certificates: {
    epicGames: 'https://cdn2.unrealengine.com/ue-logo-1400x788-1400x788-8f185e1e3635.jpg',
    udemy: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg',
    coursera: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
    pluralsight: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Pluralsight_logo.svg',
    linkedInLearning: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'
  },
  
  // Add more image categories as needed
  // projects: {
  //   project1: '/assets/projects/project1.png',
  //   project2: '/assets/projects/project2.png',
  // }
}

export default images
