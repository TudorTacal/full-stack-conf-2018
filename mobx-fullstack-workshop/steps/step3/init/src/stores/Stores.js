import { types } from "mobx-state-tree"
import SearchStore from './SearchStore';
import PhotoGallery from './PhotogalleryStore';

const model = {
    search: types.optional(SearchStore, {}),
    photoGallery: types.optional(PhotoGallery, {})
}

export default types.model(model);