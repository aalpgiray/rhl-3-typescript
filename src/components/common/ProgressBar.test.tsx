import { mount } from "enzyme";
import { ProgressBar } from "./ProgressBar";
import expect from 'expect';

const setup = (percent: number = 0) => {
  const props = {
    percent: percent
  };

  return mount(<ProgressBar {...props} />)
}

export const progressBarTests = describe('Progress bar', () => {
  // it('Should show exact percentage when props.percent set', () => {
  //   const wrapper = setup(50);
  //   expect((wrapper.find('.progress-bar').props() as HTMLInputElement).style.width).toEqual('50%');
  // });

  // it('Percentage should set to 0 and increase in time when props.percent is not set', (done) => {
  //   let wrapper = setup();
  //   expect((wrapper.find('.progress-bar').props() as HTMLInputElement).style.width).toEqual('0%');
  //   setTimeout(() => {
  //     expect(parseInt((wrapper.find('.progress-bar').props() as HTMLInputElement).style.width)).toBeGreaterThan(0);
  //     done();
  //   }, 100);
  // });
});
