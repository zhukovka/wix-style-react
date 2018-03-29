export default () => {
  if (!document.createRange) {
    document.createRange = () => {
      const pub = {};

      pub.setEnd = elem =>
        pub.commonAncestorContainer = elem;

      pub.setStart = elem =>
        pub.commonAncestorContainer = elem;

      pub.getBoundingClientRect = () =>
        ({right: 0});

      pub.getClientRects = () =>
        [];

      return pub;
    };
  }
};
