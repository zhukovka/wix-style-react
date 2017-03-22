// import eyes from 'eyes.it';
// import path from 'path';
// import {filePickerTestkitFactory, getStoryUrl, scrollToElement, waitForVisibilityOf} from '../../testkit/protractor';
//
// describe('FilePicker', () => {
//   const storyUrl = getStoryUrl('Core', 'FilePicker');
//   const dataHook = 'story-filepicker';
//
//   eyes.it('should display filePicker', () => {
//     const driver = filePickerTestkitFactory({dataHook});
//
//     browser.get(storyUrl);
//     waitForVisibilityOf(driver.element(), 'Cannot find FilePicker')
//     .then(() => {
//       scrollToElement(driver.element());
//
//       const imagePath = '../../test/assets/surf-musa.png';
//       const absolutePath = path.resolve(__dirname, imagePath);
//
//       expect(driver.getImagePlaceholder()).toBe('No file chosen (Max size 5 MB)');
//
//       driver.getInput().sendKeys(absolutePath);
//       expect(driver.getImagePlaceholder()).toBe('surf-musa.png');
//     });
//   });
// });
