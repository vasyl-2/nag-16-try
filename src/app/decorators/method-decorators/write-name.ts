// those decorators works only if //    "experimentalDecorators": true, commented

export function logWithPrefix(prefix: { prefix: string; data?: { someInner: number} }) {
  return function bound(originalMethod: any, context: ClassMethodDecoratorContext) {
    console.log('NAME______', context.name)
    console.log('kind_________________', context.kind)
    console.log('ACCESS_________________1', context.access.has({ writeA: () => console.log('TEST_________')})) // false
    console.log('ACCESS_________________2', context.access.has({ write: () => console.log('TEST_________')})) //true
    function replaceMethod(this: any, ...args: any[]) {
      console.log('ARGS___FROM__DECORATOR___FACTORY________', prefix);
      console.log('CALL___METHODS___ARGS___WITH______, args');
      console.log('CLASS___METHOD___FROM_________', this);
    }
    return replaceMethod;
  };
}

export function bound(originalMethod: any, context: ClassMethodDecoratorContext) {
  function replacementMethod(_this: any, ...args: any[]) {
  }
  return replacementMethod;
}
