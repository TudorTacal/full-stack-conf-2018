// we can compose stores
import { types } from 'mobx-state-tree';
import SerachStore from './SearchStore';
import SearchStore from './SearchStore';

const model = {
  search: types.optional(SearchStore, {})
}

export default types.model(model);