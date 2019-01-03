import { types, getEnv } from 'mobx-state-tree';

const Picture = types.model("Picture", {
  id: types.identifier(),
  title: types.string,
  image: types.string,
  large_image: types.string,
});

const model = {
  picsList: types.optional(types.array(Picture), []),
}

const actions = self => ({
  setPicsList(arr){
    const config = getEnv(self).config;

    const picsArr = arr.photos.photo.map(value => {
      return {
        id: value.id,
        title: value.title,
        iamge: config.getPicURL(value),
        large_image: config.getLargePicURL(value),
      }
    })

    self.picList = picsArr;
  }
});

export default types.model('GalleryModel', model);