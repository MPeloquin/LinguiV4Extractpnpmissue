/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ['en'],
    sourceLocale: 'en',
    compileNamespace: 'ts',
    catalogs: [
        {
            path: '<rootDir>/src/locale/{locale}/messages',
            include: ['<rootDir>/'],
            exclude: ['**/node_modules/**', '<rootDir>/storybook-static/**', '<rootDir>/lib/**'],
        },
    ],
    formatOptions: {
        origins: false, // Disables to file lines in .po
    },
};
