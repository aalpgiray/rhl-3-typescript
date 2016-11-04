import expect from 'expect';
import { formatDataForDropDown } from './selectors';
import { IAuthor } from '../reducers/author.reducer';


export const formatDataForDropDownTest = describe('Format Data For Dropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {

        const authors: IAuthor[] = [
            { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
            { id: 'cory-house', firstName: 'Cory', lastName: 'House' }
        ];

        const expected = [
            { Value: "Cory House",Key:"cory-house" },
            { Value: "Cory House",Key:"cory-house" },
        ];

        expect(formatDataForDropDown(authors, r => `${r.firstName} ${r.lastName}`, r => r.id)).toEqual(expected);
    })
})