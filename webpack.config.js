    // example 2 - setup for react, jsx, and babel
module.exports = {
    entry: "./app/entry.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_moduled|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};

    // example 1 - setup for webpack config options
// module.exports = {
//     entry: "./app/entry.js",
//     output: {
//         path: __dirname,
//         filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.css$/,
//                 loader: "style!css"
//             }
//         ]
//     }
// };