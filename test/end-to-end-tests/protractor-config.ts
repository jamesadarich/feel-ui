let config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/**/*.js'],
  baseUrl: "http://localhost:4000",
  useAllAngular2AppRoots: true
};

export { config };
