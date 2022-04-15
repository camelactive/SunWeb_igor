import scss from 'rollup-plugin-scss';

export default {
    input: 'src/js/main.js',
    output: {
        file: 'main.min.js',
        format: 'esm'
    },
    plugins: [
        scss({
            output: "src/styles/style.css",
            failOnError: true,
            runtime: require("sass"),
        }),
    ],
};