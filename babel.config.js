module.exports = {
    targets: 'defaults',
    assumptions: {
        constantReexports: true, // Optimize re-export statements that are constant
        ignoreFunctionLength: true, // Ignore the length of functions when deciding whether to inline them
        ignoreToPrimitiveHint: true, // Ignore the hint argument of the Symbol.toPrimitive method
        iterableIsArray: true, // Assume that all iterables are arrays
        noDocumentAll: true, // Document.all is not used in your code
        noIncompleteNsImportDetection: true, // Assume that there is no incomplete namespace import detection
        noNewArrows: true, // Assume that there are no new arrow functions
        objectRestNoSymbols: true, // Assume that object rest properties do not contain symbols
        pureGetters: true, // Assume that object property accessors have no side effects
        setComputedProperties: true, // Assume that computed property accessors have no side effects
        setSpreadProperties: true, // Assume that spread properties have no side effects
        skipForOfIteratorClosing: true, // Assume that for-of loops do not need to close their iterators
    },
    presets: [['@babel/preset-typescript'], ['@babel/preset-env'], ['@babel/preset-react', { runtime: 'automatic' }]],
};
