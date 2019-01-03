import { types, getEnv } from 'mobx-state-tree';

const volatileModel = self => ({
  isSearching: false,
});

const actions = self => ({
  requstPics(termToSearch) {
    self.isSearching = true;

    const URL = getEnv(self).config.getSearchUrl(termsToSearch);

    fetch(URL)
      .then(res => res.json())
      .then(self.onDataFetched)
  },

  onDataFetched(data) {
    self.isSearching = false;
    console.table(data.photos.photo); 
  }
});

export default types.model("SearchStore", {})
                .volatile(volatileModel)
                .actions(actions)
