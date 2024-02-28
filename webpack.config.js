const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: {
        app: ['./static/ts/app.ts', './static/ts/utils.ts'],
        home: ['./static/ts/home.ts'],
        // aa_local: ['./static/ts/LocalGame.ts'],
        // aa_start: ['./static/ts/GameStart.ts', './static/ts/StartCard.ts'],
        // aa_game: ['./static/ts/MultiplayerGame.ts', './static/ts/LocalGame.ts', './static/ts/GameSocket.ts', './static/ts/ApollosSocket.ts'],
        // aa_lobby: ['./static/ts/MultiplayerLobby.ts', './static/ts/LobbySocket.ts', './static/ts/ApollosSocket.ts'],
        // aa_post: ['./static/ts/MultiplayerPost.ts', './static/ts/PostSocket.ts', './static/ts/ApollosSocket.ts'],
        // aa_profile: ['./static/ts/Profile.ts', './static/ts/aa_profile.ts'],
    },
    mode: 'development',
    cache: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './static/dist'),
        clean: true,
    },
    plugins: [
        new BundleTracker({
            path: __dirname,
            filename: 'webpack-stats.json',
        }),
    ],
};
