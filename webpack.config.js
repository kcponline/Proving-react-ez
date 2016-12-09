module.exports = {
    // this gets compiled by webpack by babel spec
    entry: "./app/entry.js",
    // where plain js compile to.
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    // 
    module: {
        loaders: [
            { 
                test: /\.css$/,

                loader: "style!css"



            }
        ]
    }
};