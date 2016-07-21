declare class Symbol {
    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
     * Returns a new unique Symbol value.
     * @param  description Description of the new Symbol object.
     */
    constructor(description?: string);

    /**
     * Returns a Symbol object from the global symbol registry matching the given key if found.
     * Otherwise, returns a new symbol with this key.
     * @param key key to search for.
     */
    static for(key: string): Symbol;

    /**
     * Returns a key from the global symbol registry matching the given Symbol if found.
     * Otherwise, returns a undefined.
     * @param sym Symbol to find the key for.
     */
    static keyFor(sym: Symbol): string;
}

// Well-known Symbols
declare module Symbol {
    /**
     * A method that determines if a constructor object recognizes an object as one of the
     * constructor’s instances.Called by the semantics of the instanceof operator.
     */
    const hasInstance: Symbol;

    /**
     * A Boolean value that if true indicates that an object should be flatten to its array
     * elements by Array.prototype.concat.
     */
    const isConcatSpreadable: Symbol;

    /**
     * A Boolean value that if true indicates that an object may be used as a regular expression.
     */
    const isRegExp: Symbol;

    /**
     * A method that returns the default iterator for an object.Called by the semantics of the
     * for-of statement.
     */
    const iterator: Symbol;

    /**
     * A method that converts an object to a corresponding primitive value.Called by the
     * ToPrimitive abstract operation.
     */
    const toPrimitive: Symbol;

    /**
     * A String value that is used in the creation of the default string description of an object.
     * Called by the built- in method Object.prototype.toString.
     */
    const toStringTag: Symbol;

    /**
     * An Object whose own property names are property names that are excluded from the with
     * environment bindings of the associated objects.
     */
    const unscopables: Symbol;
}