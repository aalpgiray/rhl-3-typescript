import expect from 'expect';
import { shallow } from 'enzyme';
import { CourseForm } from './course.form';
import { emptyCourseGeneraor } from '../../pages/ManageCourse/ManageCoursePage'

const setup = (saving: boolean) => {
  const props = {
    course: emptyCourseGeneraor(), saving: saving,
    onSave: () => {
    },
    onChange: () => {
    },
    allAuthors: [{ Key: "", Value: "" }],
    loading: false
  };

  return shallow(<CourseForm {...props} />)
}

export const courseFormTest = describe("Course Form Component Tests", () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  })

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect((wrapper.find('input').props() as HTMLInputElement).value).toBe('Save');
  })

  it('save button is labeled "Saving..." when is saving', () => {
    const wrapper = setup(true);
    expect((wrapper.find('input').props() as HTMLInputElement).value).toBe('Saving...');
  })
})
