import {FormEvent, MouseEvent} from "react";
import {TextInput} from "../common/TextInput";
import {SelectInput} from "../common/SelectInput";
import {ICourse} from "../../reducers/course.reducer";
import {KeyValuePair} from "../../interfaces/common/object.interfaces";

interface ICourseForm {
  course: ICourse;
  allAuthors: KeyValuePair<string, string>[];
  onSave?: (e: MouseEvent) => void;
  onChange: (e: FormEvent) => void;
  saving?: boolean;
  loading: boolean;
  errors?: {
    title?: string;
    authorId?: string;
    category?: string;
    length?: string;
  };
}

export const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors, loading}: ICourseForm) => {
  return (
    <form>
      <fieldset disabled={saving || loading}>
        <h1>Manage Course</h1>
        <TextInput
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          error={errors && errors.title && errors.title}
        />

        <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId}
          defaultOption="Select Author"
          options={allAuthors}
          onChange={onChange}
          error={errors && errors.authorId && errors.authorId}
        />

        <TextInput
          name="category"
          label="Category"
          value={course.category}
          onChange={onChange}
          error={errors && errors.category && errors.category}
        />

        <TextInput
          name="length"
          label="Length"
          value={course.length}
          onChange={onChange}
          error={errors && errors.length && errors.length}
        />

        <input
          type="submit"
          value={saving ? 'Saving...' : 'Save'}
          class="btn btn-primary"
          onClick={onSave}
        />
      </fieldset>
    </form>
  );
};
