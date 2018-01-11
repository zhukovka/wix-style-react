const sectionHelperDriverFactory = ({element}) => {
  const classExists = className => element.classList.contains(className);

  return {
    exists: () => !!element,
    textContent: () => element.textContent,
    isWarning: () => classExists('warning'),
    isStandard: () => classExists('standard'),
    isDanger: () => classExists('danger'),
    isSuccess: () => classExists('success'),
    isPremium: () => classExists('premium')
  };
};

export default sectionHelperDriverFactory;
